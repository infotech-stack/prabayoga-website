/**
 * Praba Yoga – JavaScript entry point.
 * Bundled to assets/js/main.js by:  npm run build:js
 */
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { initNavigation } from "./modules/navigation.js";
import { initAccordions } from "./modules/accordion.js";
import { initFilters } from "./modules/filter.js";
import { initModals } from "./modules/modal.js";
import { initPrefill } from "./modules/prefill.js";
import { initForms } from "./modules/form.js";

function boot() {
  // 1. Shared layout (same on every page)
  renderHeader(document.getElementById("site-header"));
  renderFooter(document.getElementById("site-footer"));

  // 2. Behaviour
  initNavigation();
  initAccordions();
  initFilters();
  initModals();
  initPrefill();
  initForms();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
