import { qs, qsa } from "../utils/dom.js";

/**
 * Pre-select a form field from a button/link elsewhere on the page.
 *   <a href="#join-class" data-prefill-target="#classPreference" data-prefill-value="Online Ashtanga Practice">
 */
export function initPrefill() {
  qsa("[data-prefill-target]").forEach((el) =>
    el.addEventListener("click", () => {
      const field = qs(el.dataset.prefillTarget);
      if (field) field.value = el.dataset.prefillValue;
    })
  );
}
