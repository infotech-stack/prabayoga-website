import { qs, qsa, lockScroll } from "../utils/dom.js";

/**
 * Modal dialogs. Markup contract:
 *   <button data-modal-open="#myModal">Open</button>
 *   <div id="myModal" class="hidden fixed inset-0 …" role="dialog" aria-modal="true">
 *     <button data-modal-close>×</button> …
 *   </div>
 * Other modules can close a modal with:  closeModal(element)
 */
let lastTrigger = null;

export function openModal(modal, trigger = null) {
  if (!modal) return;
  lastTrigger = trigger;
  modal.classList.remove("hidden");
  lockScroll(true);
  qs("input, select, textarea, button", modal)?.focus();
}

export function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
  lockScroll(false);
  lastTrigger?.focus();
  lastTrigger = null;
}

export function initModals() {
  qsa("[data-modal-open]").forEach((btn) =>
    btn.addEventListener("click", () => openModal(qs(btn.dataset.modalOpen), btn))
  );

  qsa('[role="dialog"]').forEach((modal) => {
    qsa("[data-modal-close]", modal).forEach((btn) => btn.addEventListener("click", () => closeModal(modal)));
    // Click on the dark backdrop closes it
    modal.addEventListener("click", (e) => e.target === modal && closeModal(modal));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    qsa('[role="dialog"]:not(.hidden)').forEach(closeModal);
  });
}
