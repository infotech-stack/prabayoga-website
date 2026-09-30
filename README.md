# Praba Yoga – Website

Static website (HTML + Tailwind CSS + vanilla JS). No framework, no server needed:
open `index.html` in a browser, or host the folder on any static host (Netlify, Vercel, GitHub Pages, cPanel …).

## Folder structure

```
prabayoga-website/
├── index.html                      Home page
├── pages/                          Every other page (one file per page)
│   ├── about.html
│   ├── accommodation.html
│   ├── ashtanga-teacher-training-200hr.html
│   ├── ashtanga-practice-classes.html
│   ├── vinyasa-flow-classes.html
│   ├── location.html
│   ├── gallery.html
│   ├── contact.html
│   └── _template.html              ← copy this to start a new page
│
├── assets/                         What the browser loads (built output + static files)
│   ├── css/main.css                Compiled + minified Tailwind CSS   (generated – don't edit)
│   ├── js/main.js                  Bundled JavaScript                 (generated – don't edit)
│   └── images/                     Local images, favicon, logo …
│
├── src/                            Source code – edit these
│   ├── css/
│   │   ├── main.css                Entry file (imports the rest)
│   │   ├── base.css                Global defaults, accessibility, anchor offset
│   │   └── components/             navigation.css, forms.css
│   └── js/
│       ├── main.js                 Entry: renders header/footer, starts modules
│       ├── config/site.config.js   ★ Navigation, footer links, contact details
│       ├── components/             header.js, footer.js  (shared on every page)
│       ├── modules/                accordion, filter, form, modal, navigation, prefill
│       └── utils/                  dom.js, path.js
│
├── tailwind.config.js              Design tokens: colours, fluid type scale, spacing
└── package.json                    Build scripts
```

## The shared header & footer

The header and footer are **not copied into each page**. Every page contains only:

```html
<div id="site-header"></div>  …  <div id="site-footer"></div>
```

and `src/js/components/header.js` / `footer.js` render them from `src/js/config/site.config.js`.
Change the menu once → it changes on all pages. The current page is highlighted automatically.

## Common tasks

**Add a new page**
1. Copy `pages/_template.html` → `pages/my-page.html`, edit title / description / content.
2. Add one line to `nav` in `src/js/config/site.config.js`:
   `{ label: "My Page", href: "pages/my-page.html" }`
   (put it inside a `children: [...]` list to make it a Programs-style dropdown item).
3. Optionally add it to `footer.columns` in the same file.
4. Run `npm run build` only if you used Tailwind classes that no other page uses.

> Pages inside `/pages` must keep `<html data-root="../">`; `index.html` uses `data-root=""`. This is how the
> shared header/footer build correct links from any folder depth.

**Change contact details / social links / legal links** → `src/js/config/site.config.js`.

**Replace the logo** → put the file in `assets/images/` and set `logo.src` in `site.config.js`.

**Change colours, font sizes or spacing** → `tailwind.config.js`, then `npm run build`.

## Build (only needed after editing `src/` or Tailwind classes)

```bash
npm install          # once
npm run build        # rebuilds assets/css/main.css and assets/js/main.js
npm run dev          # watch mode + local server on http://localhost:3000
```

The compiled files in `assets/` are already included, so the site works as-is.

## Responsive type & spacing

Type sizes and section spacing are **fluid** (`clamp()`), so they scale smoothly from phones to desktops.
Use the semantic classes instead of pixel sizes:

| Use | Class | Size (phone → desktop) |
|---|---|---|
| Page title (h1) | `font-display-hero text-display-hero` | 30 → 48 px |
| Section heading (h2) | `font-headline-lg text-headline-lg` | 24 → 32 px |
| Card / sub heading | `font-headline-md` / `font-headline-sm` | 20 → 24 px / 17 → 19 px |
| Lead paragraph | `font-body-lg text-body-lg` | 16 → 17 px |
| Body text | `font-body-md text-body-md` | 15 px |
| Section padding | `py-section` (or `py-section-sm`) | 48 → 96 px |
| Gap below a heading block | `mb-block` | 32 → 56 px |
| Photo heights | `h-media-sm … h-media-2xl` | fluid |

## Interactive components (no inline JavaScript – all driven by `data-` attributes)

| Feature | Markup |
|---|---|
| FAQ accordion | `data-accordion` › `data-accordion-item` › `data-accordion-trigger` + `data-accordion-panel` (+ `data-accordion-icon`) |
| Category filter | `data-filter-group="name"` with `data-filter="x"` buttons; items get `data-filter-item="name" data-category="x"` |
| Modal | `data-modal-open="#id"` button; modal has `role="dialog"` and a `data-modal-close` button |
| Pre-fill a field | `data-prefill-target="#field" data-prefill-value="…"` |
| Forms | `<form data-form data-success="#msg" …>` – see the header comment in `src/js/modules/form.js` |

### Forms currently run in demo mode
They validate and show the success message, but **nothing is sent anywhere yet**. To receive submissions, add
your form-service URL (Formspree, Getform, your own API …): `<form data-form data-endpoint="https://formspree.io/f/xxxx" …>`.
