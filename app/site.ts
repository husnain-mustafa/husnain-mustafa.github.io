/* Single source of truth for identity, contact endpoints, and the
   canonical origin. Everything that needs an absolute URL or a
   contact address reads from here. */

export const SITE_URL = "https://husnain-mustafa.github.io";

export const EMAIL = "husnainchnaz@outlook.com";
export const GITHUB = "https://github.com/husnain-mustafa";
export const LINKEDIN = "https://www.linkedin.com/in/husnain-mustafa/";

export const SITE_NAME = "Husnain Mustafa";
export const SITE_ROLE = "Analytics Engineer";

export const SITE_DESCRIPTION =
  "Analytics engineer working across applied AI, Databricks, and enterprise analytics: production AI agents, semantic models, and the internal applications around them.";

/** Absolute URL for a site-relative path, honouring trailingSlash. */
export function absoluteUrl(path = "/") {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
