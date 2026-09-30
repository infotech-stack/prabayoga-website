/**
 * Praba Yoga – Tailwind CSS configuration (single source of truth for the design system).
 *
 * - Colours, radii and font families come from the original site design.
 * - Type scale and section spacing are FLUID: they use clamp() so headings, body copy
 *   and whitespace shrink smoothly on phones and grow on desktops (no per-breakpoint overrides needed).
 *
 * After changing this file run:  npm run build
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Brand
        "primary": "#42531f",
        "on-primary": "#ffffff",
        "primary-container": "#596b35",
        "on-primary-container": "#d5eba8",
        "primary-fixed": "#d5eba8",
        "primary-fixed-dim": "#bace8e",
        "on-primary-fixed": "#141f00",
        "on-primary-fixed-variant": "#3c4c1a",
        "inverse-primary": "#bace8e",
        "surface-tint": "#53652f",
        // Secondary
        "secondary": "#536438",
        "on-secondary": "#ffffff",
        "secondary-container": "#d3e7af",
        "on-secondary-container": "#57683c",
        "secondary-fixed": "#d6eab2",
        "secondary-fixed-dim": "#bace98",
        "on-secondary-fixed": "#121f00",
        "on-secondary-fixed-variant": "#3c4c22",
        // Tertiary
        "tertiary": "#5f4929",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#79613e",
        "on-tertiary-container": "#fedeb3",
        "tertiary-fixed": "#fedeb2",
        "tertiary-fixed-dim": "#e0c298",
        "on-tertiary-fixed": "#281800",
        "on-tertiary-fixed-variant": "#584323",
        // Surfaces
        "background": "#faf9f4",
        "on-background": "#1b1c19",
        "surface": "#faf9f4",
        "surface-bright": "#faf9f4",
        "surface-dim": "#dbdad5",
        "surface-variant": "#e3e3de",
        "on-surface": "#1b1c19",
        "on-surface-variant": "#45483d",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f4ef",
        "surface-container": "#efeee9",
        "surface-container-high": "#e9e8e3",
        "surface-container-highest": "#e3e3de",
        "inverse-surface": "#30312e",
        "inverse-on-surface": "#f2f1ec",
        // Outline
        "outline": "#76786b",
        "outline-variant": "#c6c8b9",
        // Feedback
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },

      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },

      spacing: {
        // Layout tokens (original design)
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.75rem",
        "space-xl": "3rem",
        "gutter-mobile": "1rem",
        gutter: "1.5rem",
        "margin-mobile": "1.25rem",
        margin: "4rem",
        // Fluid section rhythm: py-section, pt-section-sm, mb-block …
        section: "clamp(3rem, 2rem + 4vw, 6rem)",
        "section-sm": "clamp(2.5rem, 1.75rem + 3vw, 4.5rem)",
        block: "clamp(2rem, 1.5rem + 2vw, 3.5rem)",
      },

      // Fluid media heights: h-media-sm … h-media-xl
      height: {
        "media-sm": "clamp(14rem, 34vw, 16.25rem)",
        "media-md": "clamp(17rem, 44vw, 27.5rem)",
        "media-lg": "clamp(18rem, 48vw, 30rem)",
        "media-xl": "clamp(18rem, 46vw, 33.75rem)",
        "media-2xl": "clamp(20rem, 52vw, 32.5rem)",
      },
      minHeight: {
        hero: "clamp(28rem, 56.28vw, 44rem)",
        "hero-lg": "clamp(28rem, 80vh, 54rem)",
      },

      fontFamily: {
        "display-hero": ["Playfair Display", "Georgia", "serif"],
        "display-hero-mobile": ["Playfair Display", "Georgia", "serif"],
        "headline-lg": ["Playfair Display", "Georgia", "serif"],
        "headline-lg-mobile": ["Playfair Display", "Georgia", "serif"],
        "headline-md": ["Playfair Display", "Georgia", "serif"],
        "headline-sm": ["Playfair Display", "Georgia", "serif"],
        "subhead-italic": ["Playfair Display", "Georgia", "serif"],
        "body-lg": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "body-sm": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "label-regular": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        "label-caps": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },

      fontSize: {
        // ── Semantic scale (fluid: min → max across ~360px → 1280px viewports) ──
        "display-hero": ["clamp(1.875rem, 1.3rem + 2.4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-hero-mobile": ["clamp(1.75rem, 1.3rem + 2vw, 2.375rem)", { lineHeight: "1.18", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-lg": ["clamp(1.5rem, 1.15rem + 1.5vw, 2rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-lg-mobile": ["clamp(1.375rem, 1.1rem + 1.2vw, 1.875rem)", { lineHeight: "1.28", fontWeight: "500" }],
        "headline-md": ["clamp(1.25rem, 1.05rem + 0.7vw, 1.5rem)", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)", { lineHeight: "1.35", fontWeight: "600" }],
        "subhead-italic": ["clamp(1rem, 0.94rem + 0.28vw, 1.125rem)", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-lg": ["clamp(1rem, 0.95rem + 0.22vw, 1.0625rem)", { lineHeight: "1.7", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.55", fontWeight: "400" }],
        "label-regular": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-caps": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.14em", fontWeight: "600" }],

        // ── Fluid replacements for former fixed sizes: text-[22px] … text-[32px] ──
        "fluid-md": ["clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)", { lineHeight: "1.35" }],
        "fluid-lg": ["clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)", { lineHeight: "1.3" }],
        "fluid-xl": ["clamp(1.25rem, 1.1rem + 0.9vw, 1.625rem)", { lineHeight: "1.3" }],
        "fluid-2xl": ["clamp(1.375rem, 1.15rem + 1.2vw, 1.875rem)", { lineHeight: "1.25" }],

        // ── Tailwind's large defaults, made fluid so text-2xl … text-7xl never overflow phones ──
        xl: ["clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)", { lineHeight: "1.45" }],
        "2xl": ["clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)", { lineHeight: "1.35" }],
        "3xl": ["clamp(1.5rem, 1.25rem + 1.1vw, 1.875rem)", { lineHeight: "1.25" }],
        "4xl": ["clamp(1.75rem, 1.4rem + 1.5vw, 2.25rem)", { lineHeight: "1.2" }],
        "5xl": ["clamp(2rem, 1.5rem + 2.2vw, 3rem)", { lineHeight: "1.15" }],
        "6xl": ["clamp(2.25rem, 1.6rem + 2.8vw, 3.75rem)", { lineHeight: "1.1" }],
        "7xl": ["clamp(2.5rem, 1.7rem + 3.4vw, 4.5rem)", { lineHeight: "1.05" }],
      },
    },
  },
  plugins: [],
};
