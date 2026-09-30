/**
 * Site-wide configuration – the ONE place to edit when you add/rename a page,
 * change contact details, or update the footer.
 *
 * All `href` values are written relative to the SITE ROOT (the folder containing index.html).
 * The header/footer prepend the correct "../" automatically depending on which page is open.
 *
 * ── Adding a new page ─────────────────────────────────────────────────────────────
 *  1. Copy an existing file in /pages (e.g. about.html) → pages/my-new-page.html
 *  2. Add one line to `nav` below:  { label: "My Page", href: "pages/my-new-page.html" }
 *  3. (Optional) add it to `footer.columns`.
 *  4. Run `npm run build` if you used new Tailwind classes.
 */
const siteConfig = {
  name: "Praba Yoga & Wellbeing Centre",
  shortName: "PRABA YOGA",
  tagline: "Quietude, discipline, and mindful luxury nestled amidst sacred neem groves.",
  badge: "RYS 200 Yoga Alliance",
  logo: {
    // Replace with a local file once you have one, e.g. "assets/images/logo.png"
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOu8YZ_VrediQ28Ac1DllUEZ7qYlOpqFJtgBx9b1nRhouF5tjleIVNDYWga0Rljt1NU4-1p2WPC-gG3ZB-lYEhc48XyWssJploppx2sp5E-um8rB3KxDgfDtZdc8qc0zFuxut6wX8STjaIXoO81S968Sd7CUgtyj0DQ4VOZbI_ZGwN0FcLiFMjk-S0TYOM-4Nalx9hf0jVpWuH-NOIbFA6I1mpiblv-11DZ8aYIl-4NAtqodMSX9F8se95LZBXWbHB_A",
    alt: "Praba Yoga & Wellbeing Centre",
  },

  contact: {
    email: "admissions@prabayoga.com",
    whatsapp: "https://wa.me/919443210000",
    addressLines: ["Solitude Farm, Auroville Bioregion", "Pondicherry, Tamil Nadu 605101, India"],
  },

  social: [
    { label: "@prabayoga", icon: "photo_camera", href: "#" },
    { label: "@yogapraba", icon: "public", href: "#" },
  ],

  // Primary call-to-action button (header + mobile menu)
  cta: { label: "Apply Now", href: "pages/contact.html#application-form" },

  // Header navigation. An item with `children` becomes a dropdown (accordion on mobile).
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "pages/about.html" },
    {
      label: "Programs",
      children: [
        { label: "200-Hour Ashtanga Yoga Teacher Training", href: "pages/ashtanga-teacher-training-200hr.html" },
        { label: "Ashtanga Practice Classes", href: "pages/ashtanga-practice-classes.html" },
        { label: "Vinyasa Flow Classes", href: "pages/vinyasa-flow-classes.html" },
      ],
    },
    { label: "Accommodation", href: "pages/accommodation.html" },
    { label: "Location", href: "pages/location.html" },
    { label: "Gallery", href: "pages/gallery.html" },
    { label: "Contact", href: "pages/contact.html" },
  ],

  footer: {
    columns: [
      {
        title: "Quick Navigation",
        links: [
          { label: "Home Sanctuary", href: "index.html" },
          { label: "The Tradition & Lineage", href: "pages/about.html" },
          { label: "Veranda Accommodations", href: "pages/accommodation.html" },
          { label: "Our Location", href: "pages/location.html" },
          { label: "Visual Journal & Grounds", href: "pages/gallery.html" },
          { label: "Enquiries & Admissions", href: "pages/contact.html" },
        ],
      },
      {
        title: "Curriculum & Immersion",
        links: [
          { label: "200-Hour Ashtanga TTC", href: "pages/ashtanga-teacher-training-200hr.html" },
          { label: "Morning Mysore & Led Classes", href: "pages/ashtanga-practice-classes.html" },
          { label: "Sunset Vinyasa & Pranayama", href: "pages/vinyasa-flow-classes.html" },
          { label: "Retreat Applications", href: "pages/contact.html#application-form" },
        ],
      },
    ],
    // TODO: create these pages, then replace "#" with e.g. "pages/privacy-policy.html"
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Code of Discipline", href: "#" },
      { label: "Terms of Immersion", href: "#" },
    ],
  },
};

export default siteConfig;
