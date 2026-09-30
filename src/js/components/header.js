import siteConfig from "../config/site.config.js";
import { resolveHref, isCurrentPage } from "../utils/path.js";

const { nav, cta, logo, name } = siteConfig;

/* ── Desktop ─────────────────────────────────────────────────────────────── */

const desktopLink = (item) => {
  const active = isCurrentPage(item.href);
  const state = active
    ? "text-primary font-semibold border-primary"
    : "text-on-surface-variant font-medium border-transparent hover:text-primary";
  return `<a href="${resolveHref(item.href)}" class="pb-0.5 border-b-2 transition-colors duration-200 whitespace-nowrap ${state}" ${active ? 'aria-current="page"' : ""}>${item.label}</a>`;
};

const desktopDropdown = (item) => {
  const active = item.children.some((c) => isCurrentPage(c.href));
  const state = active
    ? "text-primary font-semibold border-primary"
    : "text-on-surface-variant font-medium border-transparent hover:text-primary";
  const links = item.children
    .map((c) => {
      const cur = isCurrentPage(c.href);
      return `<a href="${resolveHref(c.href)}" class="block px-5 py-2.5 font-body-sm text-body-sm tracking-normal normal-case transition-colors hover:bg-surface-container hover:text-primary ${cur ? "text-primary font-semibold" : "text-on-surface"}" ${cur ? 'aria-current="page"' : ""}>${c.label}</a>`;
    })
    .join("");
  return `
    <div class="relative group" data-dropdown>
      <button type="button" class="inline-flex items-center gap-1 pb-0.5 border-b-2 uppercase cursor-pointer transition-colors duration-200 whitespace-nowrap ${state}" aria-haspopup="true" aria-expanded="false" data-dropdown-toggle>
        <span>${item.label}</span>
        <span class="material-symbols-outlined text-[16px] text-primary transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">expand_more</span>
      </button>
      <div class="absolute left-0 top-full pt-3 w-72 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
        <div class="py-3 bg-surface-container-lowest border border-[#e3e3de] shadow-xl rounded text-left">${links}</div>
      </div>
    </div>`;
};

/* ── Mobile ──────────────────────────────────────────────────────────────── */

const mobileLink = (item) => {
  const active = isCurrentPage(item.href);
  return `<li><a href="${resolveHref(item.href)}" class="block py-3.5 font-headline-sm text-[15px] uppercase tracking-[0.12em] transition-colors hover:text-primary ${active ? "text-primary font-semibold" : "text-on-surface font-medium"}" ${active ? 'aria-current="page"' : ""}>${item.label}</a></li>`;
};

const mobileGroup = (item, index) => {
  const active = item.children.some((c) => isCurrentPage(c.href));
  const panelId = `mobile-sub-${index}`;
  const links = item.children
    .map((c) => {
      const cur = isCurrentPage(c.href);
      return `<li><a href="${resolveHref(c.href)}" class="block py-2.5 pl-4 border-l-2 font-body-md text-body-md transition-colors hover:text-primary ${cur ? "border-primary text-primary font-semibold" : "border-outline-variant text-on-surface-variant"}" ${cur ? 'aria-current="page"' : ""}>${c.label}</a></li>`;
    })
    .join("");
  return `
    <li>
      <button type="button" class="w-full flex items-center justify-between py-3.5 font-headline-sm text-[15px] uppercase tracking-[0.12em] cursor-pointer transition-colors hover:text-primary ${active ? "text-primary font-semibold" : "text-on-surface font-medium"}" aria-expanded="${active}" aria-controls="${panelId}" data-submenu-toggle>
        <span>${item.label}</span>
        <span class="material-symbols-outlined text-[22px] transition-transform duration-200 ${active ? "rotate-180" : ""}" aria-hidden="true">expand_more</span>
      </button>
      <ul id="${panelId}" class="pb-3 space-y-1 ${active ? "" : "hidden"}">${links}</ul>
    </li>`;
};

/* ── Header ──────────────────────────────────────────────────────────────── */

export function renderHeader(mount) {
  if (!mount) return;

  const desktopItems = nav.map((i) => (i.children ? desktopDropdown(i) : desktopLink(i))).join("");
  const mobileItems = nav.map((i, n) => (i.children ? mobileGroup(i, n) : mobileLink(i))).join("");

  mount.innerHTML = `
    <header class="sticky top-0 z-50 border-b border-[#e8e6df] bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 shadow-sm" data-site-header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 sm:h-[4.5rem] lg:h-20 flex items-center justify-between gap-4 xl:gap-8">

        <a href="${resolveHref("index.html")}" class="shrink-0 inline-flex items-center" aria-label="${name} – home">
          <img src="${logo.src}" alt="${logo.alt}" class="h-11 sm:h-12 lg:h-14 w-auto object-contain mix-blend-multiply" width="160" height="56" decoding="async">
        </a>

        <nav class="hidden lg:flex items-center gap-5 xl:gap-7 font-headline-sm text-[12px] xl:text-[13px] tracking-[0.1em] xl:tracking-[0.16em] uppercase" aria-label="Primary">
          ${desktopItems}
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <a href="${resolveHref(cta.href)}" class="hidden sm:inline-flex items-center justify-center px-4 lg:px-5 xl:px-6 py-2.5 rounded bg-primary text-on-primary hover:bg-primary-container font-label-caps text-label-caps uppercase tracking-wider shadow-sm transition-colors whitespace-nowrap">${cta.label}</a>

          <button type="button" class="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded text-on-surface hover:bg-surface-container transition-colors cursor-pointer" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
            <span class="material-symbols-outlined text-[28px]" aria-hidden="true" data-menu-icon>menu</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="mobile-menu lg:hidden absolute inset-x-0 top-full bg-surface border-b border-[#e8e6df] shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain" hidden>
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-2 pb-6" aria-label="Mobile">
          <ul class="divide-y divide-[#e8e6df]">${mobileItems}</ul>
          <a href="${resolveHref(cta.href)}" class="mt-5 w-full inline-flex items-center justify-center px-6 py-3.5 rounded bg-primary text-on-primary hover:bg-primary-container font-label-caps text-label-caps uppercase tracking-widest shadow-sm transition-colors">${cta.label}</a>
        </nav>
      </div>
    </header>`;
}
