import { clearApiCache } from "../../lib/api";

export const prerender = false;

const DEFAULT_PATHS = ["/", "/projects"];

type RevalidatePayload = {
  paths?: string[];
};

const normalizePaths = (paths: string[]) => {
  const normalized = paths
    .filter((path) => typeof path === "string" && path.trim().length > 0)
    .map((path) => (path.startsWith("/") ? path : `/${path}`));

  return Array.from(new Set(normalized));
};

const getPayload = async (request: Request) => {
  if (!request.body) {
    return null;
  }

  try {
    return (await request.json()) as RevalidatePayload;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid JSON payload: ${message}`);
  }
};

const revalidatePaths = async (origin: string, paths: string[], bypassToken: string) => {
  const requests = paths.map(async (path) => {
    const url = new URL(path, origin);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-prerender-revalidate": bypassToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Revalidate failed for ${path} (${response.status})`);
    }

    return path;
  });

  const results = await Promise.allSettled(requests);
  const revalidated: string[] = [];
  const failures: string[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      revalidated.push(result.value);
    } else {
      failures.push(result.reason instanceof Error ? result.reason.message : String(result.reason));
    }
  }

  return { revalidated, failures };
};

export const POST = async ({ request }: { request: Request }) => {
  const secret = import.meta.env.REVALIDATE_SECRET;
  if (!secret) {
    return new Response(JSON.stringify({ error: "Missing REVALIDATE_SECRET" }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const providedSecret = request.headers.get("x-revalidate-secret");
  if (providedSecret !== secret) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const bypassToken = import.meta.env.REVALIDATE_BYPASS_TOKEN;
  if (!bypassToken) {
    return new Response(JSON.stringify({ error: "Missing REVALIDATE_BYPASS_TOKEN" }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  let payload: RevalidatePayload | null = null;
  try {
    payload = await getPayload(request);
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Invalid payload",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const paths = normalizePaths(payload?.paths?.length ? payload.paths : DEFAULT_PATHS);
  const origin = new URL(request.url).origin;

  clearApiCache();

  const { revalidated, failures } = await revalidatePaths(origin, paths, bypassToken);

  if (failures.length > 0) {
    return new Response(
      JSON.stringify({
        error: "Revalidation failed",
        failures,
        revalidated,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      revalidated,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
