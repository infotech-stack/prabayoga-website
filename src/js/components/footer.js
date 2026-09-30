import siteConfig from "../config/site.config.js";
import { resolveHref } from "../utils/path.js";

const { shortName, tagline, badge, contact, social, footer } = siteConfig;

const linkColumn = ({ title, links }) => `
  <div>
    <h4 class="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest mb-5">${title}</h4>
    <ul class="space-y-3 font-body-sm text-body-sm text-outline-variant">
      ${links.map((l) => `<li><a href="${resolveHref(l.href)}" class="inline-block transition-colors hover:text-inverse-on-surface">${l.label}</a></li>`).join("")}
    </ul>
  </div>`;

export function renderFooter(mount) {
  if (!mount) return;

  mount.innerHTML = `
    <footer class="w-full bg-inverse-surface text-inverse-on-surface pt-section-sm pb-8 lg:pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">

        <div>
          <a href="${resolveHref("index.html")}" class="inline-block mb-5 font-headline-md text-headline-md tracking-tight text-inverse-on-surface">${shortName}</a>
          <p class="font-subhead-italic text-subhead-italic text-outline-variant mb-6 max-w-xs">${tagline}</p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-variant/20">
            <span class="material-symbols-outlined text-[18px] text-tertiary-fixed" aria-hidden="true">verified</span>
            <span class="font-label-caps text-label-caps uppercase tracking-wider">${badge}</span>
          </div>
        </div>

        ${footer.columns.map(linkColumn).join("")}

        <div>
          <h4 class="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest mb-5">Sanctuary &amp; Community</h4>
          <address class="not-italic font-body-sm text-body-sm text-outline-variant space-y-2 mb-6">
            ${contact.addressLines.map((l) => `<p>${l}</p>`).join("")}
            <p class="pt-2"><a href="mailto:${contact.email}" class="break-all transition-colors hover:text-inverse-on-surface">${contact.email}</a></p>
          </address>
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-outline-variant">
            ${social.map((s) => `<a href="${s.href}" class="inline-flex items-center gap-1.5 font-label-caps text-label-caps transition-colors hover:text-tertiary-fixed"><span class="material-symbols-outlined text-[16px]" aria-hidden="true">${s.icon}</span><span>${s.label}</span></a>`).join("")}
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-body-sm text-body-sm text-outline">
        <p>© ${new Date().getFullYear()} ${shortName} Retreat &amp; School. Registered Yoga School (RYS 200).</p>
        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label-caps text-label-caps uppercase tracking-wider">
          ${footer.legal.map((l) => `<li><a href="${resolveHref(l.href)}" class="transition-colors hover:text-inverse-on-surface">${l.label}</a></li>`).join("")}
        </ul>
      </div>
    </footer>`;
}
