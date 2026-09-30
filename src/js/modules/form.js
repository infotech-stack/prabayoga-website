import { qs, qsa, show, hide } from "../utils/dom.js";
import { closeModal } from "./modal.js";

/**
 * Progressive form handling. Markup contract (all attributes optional except data-form):
 *
 *   <form data-form
 *         data-endpoint="https://formspree.io/f/xxxx"   ← POST the form here (omit = demo mode, nothing is sent)
 *         data-success="#successMessage"                 ← element to reveal on success
 *         data-hide="self | #selector"                   ← element(s) to hide on success ("self" = the form)
 *         data-reset                                     ← clear the fields on success
 *         data-scroll                                    ← scroll the success message into view
 *         data-loading-text="Submitting…"                ← swap submit-button label while sending
 *         data-alert="Thanks!"                           ← window.alert() on success
 *         data-close-modal="#modalId">                   ← close a modal on success
 */
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export function initForms() {
  qsa("form[data-form]").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = qs('[type="submit"]', form);
      const originalLabel = submitBtn?.innerHTML;
      const { endpoint, success, hide: hideSel, loadingText } = form.dataset;

      if (submitBtn && loadingText) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="material-symbols-outlined animate-spin text-[18px]" aria-hidden="true">progress_activity</span><span>${loadingText}</span>`;
      }

      try {
        if (endpoint) {
          const res = await fetch(endpoint, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
          });
          if (!res.ok) throw new Error(`Request failed (${res.status})`);
        } else if (loadingText) {
          await wait(900); // demo mode: simulate a network round-trip
        }
      } catch (err) {
        console.error(err);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
        window.alert("Sorry, we couldn't send your request. Please try again or contact us on WhatsApp.");
        return;
      }

      if (hideSel) {
        (hideSel === "self" ? [form] : qsa(hideSel)).forEach(hide);
      }
      const message = success ? qs(success) : null;
      if (message) {
        show(message);
        if ("scroll" in form.dataset) message.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if ("reset" in form.dataset) form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
      }
      if (form.dataset.alert) window.alert(form.dataset.alert);
      if (form.dataset.closeModal) closeModal(qs(form.dataset.closeModal));
    });
  });
}
