import { qsa } from "../utils/dom.js";

/**
 * Category filter (gallery, room types …). Markup contract:
 *
 *   <div data-filter-group="rooms"
 *        data-active-class="bg-primary text-on-primary"
 *        data-inactive-class="bg-surface-container text-on-surface-variant">
 *     <button data-filter="all">All</button>
 *     <button data-filter="private">Private</button>
 *   </div>
 *
 *   <article data-filter-item="rooms" data-category="private shared">…</article>
 */
export function initFilters() {
  qsa("[data-filter-group]").forEach((group) => {
    const name = group.dataset.filterGroup;
    const active = (group.dataset.activeClass || "").split(/\s+/).filter(Boolean);
    const inactive = (group.dataset.inactiveClass || "").split(/\s+/).filter(Boolean);
    const buttons = qsa("[data-filter]", group);
    const items = qsa(`[data-filter-item="${name}"]`);

    const apply = (value) => {
      buttons.forEach((btn) => {
        const on = btn.dataset.filter === value;
        btn.classList.remove(...(on ? inactive : active));
        btn.classList.add(...(on ? active : inactive));
        btn.setAttribute("aria-pressed", String(on));
      });
      items.forEach((item) => {
        const categories = (item.dataset.category || "").split(/\s+/);
        item.classList.toggle("hidden", !(value === "all" || categories.includes(value)));
      });
    };

    buttons.forEach((btn) => btn.addEventListener("click", () => apply(btn.dataset.filter)));
  });
}
