/** Tiny DOM helpers shared by the UI modules. */
export const qs = (selector, root = document) => root.querySelector(selector);
export const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let uid = 0;
export const uniqueId = (prefix = "pb") => `${prefix}-${++uid}`;

export const show = (el) => el && el.classList.remove("hidden");
export const hide = (el) => el && el.classList.add("hidden");

/** Lock/unlock page scroll (used by the mobile menu and modals). */
export const lockScroll = (locked) => document.documentElement.classList.toggle("is-locked", locked);
