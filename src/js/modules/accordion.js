import { qs, qsa, uniqueId } from "../utils/dom.js";

/**
 * Accessible accordion (FAQ etc.). Markup contract:
 *
 *   <div data-accordion>                       ← add data-accordion="multiple" to allow several open
 *     <div data-accordion-item>
 *       <button data-accordion-trigger>Question <span data-accordion-icon>expand_more</span></button>
 *       <div data-accordion-panel class="hidden">Answer</div>
 *     </div>
 *   </div>
 */
export function initAccordions() {
  qsa("[data-accordion]").forEach((group) => {
    const single = group.dataset.accordion !== "multiple";
    const items = qsa("[data-accordion-item]", group);

    const setOpen = (item, open) => {
      const trigger = qs("[data-accordion-trigger]", item);
      const panel = qs("[data-accordion-panel]", item);
      const icon = qs("[data-accordion-icon]", item);
      panel.classList.toggle("hidden", !open);
      trigger.setAttribute("aria-expanded", String(open));
      icon?.classList.toggle("rotate-180", open);
    };

    items.forEach((item) => {
      const trigger = qs("[data-accordion-trigger]", item);
      const panel = qs("[data-accordion-panel]", item);
      if (!trigger || !panel) return;

      panel.id ||= uniqueId("acc");
      trigger.setAttribute("aria-controls", panel.id);
      trigger.setAttribute("aria-expanded", "false");

      // Allow non-<button> triggers (e.g. a card header) to be keyboard accessible
      if (trigger.tagName !== "BUTTON") {
        trigger.setAttribute("role", "button");
        trigger.tabIndex = 0;
        trigger.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            trigger.click();
          }
        });
      }

      trigger.addEventListener("click", () => {
        const willOpen = panel.classList.contains("hidden");
        if (single) items.forEach((other) => other !== item && setOpen(other, false));
        setOpen(item, willOpen);
      });
    });
  });
}
