export const prerender = false;

export async function GET({ url }: { url: URL }): Promise<Response> {
  const username = url.searchParams.get("username") ?? "bouajilaProg";
  const apiUrl = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=all`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch contributions" }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch contributions" }), {
      status: 502,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
