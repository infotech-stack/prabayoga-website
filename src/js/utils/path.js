/**
 * Path helpers. Every page declares where the site root is via <html data-root="">
 * ("" for index.html, "../" for files inside /pages).
 */
export const ROOT = document.documentElement.dataset.root || "";

const EXTERNAL = /^(https?:|mailto:|tel:|sms:|\/\/|#)/i;

/** Turn a root-relative href from site.config.js into one that works from the current page. */
export function resolveHref(href) {
  return EXTERNAL.test(href) ? href : ROOT + href;
}

const fileName = (path) => {
  const clean = path.split("#")[0].split("?")[0].replace(/\/+$/, "");
  const last = clean.split("/").pop();
  return !last || !/\./.test(last) ? "index.html" : last.toLowerCase();
};

/** True when `href` (root-relative) points at the page that is currently open. */
export function isCurrentPage(href) {
  if (!href || EXTERNAL.test(href)) return false;
  return fileName(href) === fileName(window.location.pathname);
}
