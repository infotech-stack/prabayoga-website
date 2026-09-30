import { qs, qsa, lockScroll } from "../utils/dom.js";

const DESKTOP_QUERY = window.matchMedia("(min-width: 1024px)");

/** Mobile hamburger menu + its Programs sub-menu, and desktop dropdown a11y state. */
export function initNavigation() {
  const toggle = qs("[data-menu-toggle]");
  const menu = qs("#mobile-menu");
  const icon = qs("[data-menu-icon]");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (icon) icon.textContent = open ? "close" : "menu";
    lockScroll(open);
  };
  const isOpen = () => !menu.hidden;

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Close after choosing a link
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close with Escape (and return focus to the button)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when tapping outside the header
  document.addEventListener("click", (e) => {
    if (isOpen() && !e.target.closest("[data-site-header]")) setOpen(false);
  });

  // Reset when the viewport grows to the desktop layout
  DESKTOP_QUERY.addEventListener("change", (e) => e.matches && setOpen(false));

  // Programs accordion inside the mobile menu
  qsa("[data-submenu-toggle]", menu).forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const chevron = qs(".material-symbols-outlined", btn);
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("hidden", !open);
      chevron?.classList.toggle("rotate-180", open);
    });
  });

  // Keep aria-expanded in sync for the desktop dropdown (hover/focus is handled in CSS)
  qsa("[data-dropdown]").forEach((dd) => {
    const btn = qs("[data-dropdown-toggle]", dd);
    const sync = (v) => btn.setAttribute("aria-expanded", String(v));
    dd.addEventListener("mouseenter", () => sync(true));
    dd.addEventListener("mouseleave", () => sync(false));
    dd.addEventListener("focusin", () => sync(true));
    dd.addEventListener("focusout", (e) => !dd.contains(e.relatedTarget) && sync(false));
  });
}
