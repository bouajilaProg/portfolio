import { Github, Linkedin, Mail, Twitter, Globe, FileText, Package, Link as LinkIcon } from "lucide-react";

export type LinkType = "github" | "linkedin" | "mail" | "twitter" | "website" | "docs" | "pypi" | "default";

export interface LinkData {
  name: string;
  type: LinkType;
  href: string;
}

export const getIconForType = (type: LinkType, className?: string) => {
  switch (type) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "twitter":
      return <Twitter className={className} />;
    case "website":
      return <Globe className={className} />;
    case "docs":
      return <FileText className={className} />;
    case "pypi":
      return <Package className={className} />;
    case "default":
    default:
      return <LinkIcon className={className} />;
  }
};
