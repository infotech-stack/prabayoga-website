(()=>{var N={name:"Praba Yoga & Wellbeing Centre",shortName:"PRABA YOGA",tagline:"Quietude, discipline, and mindful luxury nestled amidst sacred neem groves.",badge:"RYS 200 Yoga Alliance",logo:{src:"https://lh3.googleusercontent.com/aida-public/AB6AXuAOu8YZ_VrediQ28Ac1DllUEZ7qYlOpqFJtgBx9b1nRhouF5tjleIVNDYWga0Rljt1NU4-1p2WPC-gG3ZB-lYEhc48XyWssJploppx2sp5E-um8rB3KxDgfDtZdc8qc0zFuxut6wX8STjaIXoO81S968Sd7CUgtyj0DQ4VOZbI_ZGwN0FcLiFMjk-S0TYOM-4Nalx9hf0jVpWuH-NOIbFA6I1mpiblv-11DZ8aYIl-4NAtqodMSX9F8se95LZBXWbHB_A",alt:"Praba Yoga & Wellbeing Centre"},contact:{email:"admissions@prabayoga.com",whatsapp:"https://wa.me/919443210000",addressLines:["Solitude Farm, Auroville Bioregion","Pondicherry, Tamil Nadu 605101, India"]},social:[{label:"@prabayoga",icon:"photo_camera",href:"#"},{label:"@yogapraba",icon:"public",href:"#"}],cta:{label:"Apply Now",href:"pages/contact.html#application-form"},nav:[{label:"Home",href:"index.html"},{label:"About Us",href:"pages/about.html"},{label:"Programs",children:[{label:"200-Hour Ashtanga Yoga Teacher Training",href:"pages/ashtanga-teacher-training-200hr.html"},{label:"Ashtanga Practice Classes",href:"pages/ashtanga-practice-classes.html"},{label:"Vinyasa Flow Classes",href:"pages/vinyasa-flow-classes.html"}]},{label:"Accommodation",href:"pages/accommodation.html"},{label:"Location",href:"pages/location.html"},{label:"Gallery",href:"pages/gallery.html"},{label:"Contact",href:"pages/contact.html"}],footer:{columns:[{title:"Quick Navigation",links:[{label:"Home Sanctuary",href:"index.html"},{label:"The Tradition & Lineage",href:"pages/about.html"},{label:"Veranda Accommodations",href:"pages/accommodation.html"},{label:"Our Location",href:"pages/location.html"},{label:"Visual Journal & Grounds",href:"pages/gallery.html"},{label:"Enquiries & Admissions",href:"pages/contact.html"}]},{title:"Curriculum & Immersion",links:[{label:"200-Hour Ashtanga TTC",href:"pages/ashtanga-teacher-training-200hr.html"},{label:"Morning Mysore & Led Classes",href:"pages/ashtanga-practice-classes.html"},{label:"Sunset Vinyasa & Pranayama",href:"pages/vinyasa-flow-classes.html"},{label:"Retreat Applications",href:"pages/contact.html#application-form"}]}],legal:[{label:"Privacy Policy",href:"#"},{label:"Code of Discipline",href:"#"},{label:"Terms of Immersion",href:"#"}]}},g=N;var Y=document.documentElement.dataset.root||"",w=/^(https?:|mailto:|tel:|sms:|\/\/|#)/i;function p(e){return w.test(e)?e:Y+e}var v=e=>{let r=e.split("#")[0].split("?")[0].replace(/\/+$/,"").split("/").pop();return!r||!/\./.test(r)?"index.html":r.toLowerCase()};function u(e){return!e||w.test(e)?!1:v(e)===v(window.location.pathname)}var{nav:$,cta:x,logo:k,name:D}=g,B=e=>{let a=u(e.href),r=a?"text-primary font-semibold border-primary":"text-on-surface-variant font-medium border-transparent hover:text-primary";return`<a href="${p(e.href)}" class="pb-0.5 border-b-2 transition-colors duration-200 whitespace-nowrap ${r}" ${a?'aria-current="page"':""}>${e.label}</a>`},R=e=>{let r=e.children.some(s=>u(s.href))?"text-primary font-semibold border-primary":"text-on-surface-variant font-medium border-transparent hover:text-primary",i=e.children.map(s=>{let t=u(s.href);return`<a href="${p(s.href)}" class="block px-5 py-2.5 font-body-sm text-body-sm tracking-normal normal-case transition-colors hover:bg-surface-container hover:text-primary ${t?"text-primary font-semibold":"text-on-surface"}" ${t?'aria-current="page"':""}>${s.label}</a>`}).join("");return`
    <div class="relative group" data-dropdown>
      <button type="button" class="inline-flex items-center gap-1 pb-0.5 border-b-2 uppercase cursor-pointer transition-colors duration-200 whitespace-nowrap ${r}" aria-haspopup="true" aria-expanded="false" data-dropdown-toggle>
        <span>${e.label}</span>
        <span class="material-symbols-outlined text-[16px] text-primary transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">expand_more</span>
      </button>
      <div class="absolute left-0 top-full pt-3 w-72 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
        <div class="py-3 bg-surface-container-lowest border border-[#e3e3de] shadow-xl rounded text-left">${i}</div>
      </div>
    </div>`},V=e=>{let a=u(e.href);return`<li><a href="${p(e.href)}" class="block py-3.5 font-headline-sm text-[15px] uppercase tracking-[0.12em] transition-colors hover:text-primary ${a?"text-primary font-semibold":"text-on-surface font-medium"}" ${a?'aria-current="page"':""}>${e.label}</a></li>`},W=(e,a)=>{let r=e.children.some(t=>u(t.href)),i=`mobile-sub-${a}`,s=e.children.map(t=>{let l=u(t.href);return`<li><a href="${p(t.href)}" class="block py-2.5 pl-4 border-l-2 font-body-md text-body-md transition-colors hover:text-primary ${l?"border-primary text-primary font-semibold":"border-outline-variant text-on-surface-variant"}" ${l?'aria-current="page"':""}>${t.label}</a></li>`}).join("");return`
    <li>
      <button type="button" class="w-full flex items-center justify-between py-3.5 font-headline-sm text-[15px] uppercase tracking-[0.12em] cursor-pointer transition-colors hover:text-primary ${r?"text-primary font-semibold":"text-on-surface font-medium"}" aria-expanded="${r}" aria-controls="${i}" data-submenu-toggle>
        <span>${e.label}</span>
        <span class="material-symbols-outlined text-[22px] transition-transform duration-200 ${r?"rotate-180":""}" aria-hidden="true">expand_more</span>
      </button>
      <ul id="${i}" class="pb-3 space-y-1 ${r?"":"hidden"}">${s}</ul>
    </li>`};function E(e){if(!e)return;let a=$.map(i=>i.children?R(i):B(i)).join(""),r=$.map((i,s)=>i.children?W(i,s):V(i)).join("");e.innerHTML=`
    <header class="sticky top-0 z-50 border-b border-[#e8e6df] bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 shadow-sm" data-site-header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-16 sm:h-[4.5rem] lg:h-20 flex items-center justify-between gap-4 xl:gap-8">

        <a href="${p("index.html")}" class="shrink-0 inline-flex items-center" aria-label="${D} \u2013 home">
          <img src="${k.src}" alt="${k.alt}" class="h-11 sm:h-12 lg:h-14 w-auto object-contain mix-blend-multiply" width="160" height="56" decoding="async">
        </a>

        <nav class="hidden lg:flex items-center gap-5 xl:gap-7 font-headline-sm text-[12px] xl:text-[13px] tracking-[0.1em] xl:tracking-[0.16em] uppercase" aria-label="Primary">
          ${a}
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <a href="${p(x.href)}" class="hidden sm:inline-flex items-center justify-center px-4 lg:px-5 xl:px-6 py-2.5 rounded bg-primary text-on-primary hover:bg-primary-container font-label-caps text-label-caps uppercase tracking-wider shadow-sm transition-colors whitespace-nowrap">${x.label}</a>

          <button type="button" class="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded text-on-surface hover:bg-surface-container transition-colors cursor-pointer" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
            <span class="material-symbols-outlined text-[28px]" aria-hidden="true" data-menu-icon>menu</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="mobile-menu lg:hidden absolute inset-x-0 top-full bg-surface border-b border-[#e8e6df] shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain" hidden>
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-2 pb-6" aria-label="Mobile">
          <ul class="divide-y divide-[#e8e6df]">${r}</ul>
          <a href="${p(x.href)}" class="mt-5 w-full inline-flex items-center justify-center px-6 py-3.5 rounded bg-primary text-on-primary hover:bg-primary-container font-label-caps text-label-caps uppercase tracking-widest shadow-sm transition-colors">${x.label}</a>
        </nav>
      </div>
    </header>`}var{shortName:L,tagline:Z,badge:_,contact:y,social:G,footer:A}=g,X=({title:e,links:a})=>`
  <div>
    <h4 class="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest mb-5">${e}</h4>
    <ul class="space-y-3 font-body-sm text-body-sm text-outline-variant">
      ${a.map(r=>`<li><a href="${p(r.href)}" class="inline-block transition-colors hover:text-inverse-on-surface">${r.label}</a></li>`).join("")}
    </ul>
  </div>`;function S(e){e&&(e.innerHTML=`
    <footer class="w-full bg-inverse-surface text-inverse-on-surface pt-section-sm pb-8 lg:pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">

        <div>
          <a href="${p("index.html")}" class="inline-block mb-5 font-headline-md text-headline-md tracking-tight text-inverse-on-surface">${L}</a>
          <p class="font-subhead-italic text-subhead-italic text-outline-variant mb-6 max-w-xs">${Z}</p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-variant/20">
            <span class="material-symbols-outlined text-[18px] text-tertiary-fixed" aria-hidden="true">verified</span>
            <span class="font-label-caps text-label-caps uppercase tracking-wider">${_}</span>
          </div>
        </div>

        ${A.columns.map(X).join("")}

        <div>
          <h4 class="font-label-caps text-label-caps uppercase text-tertiary-fixed tracking-widest mb-5">Sanctuary &amp; Community</h4>
          <address class="not-italic font-body-sm text-body-sm text-outline-variant space-y-2 mb-6">
            ${y.addressLines.map(a=>`<p>${a}</p>`).join("")}
            <p class="pt-2"><a href="mailto:${y.email}" class="break-all transition-colors hover:text-inverse-on-surface">${y.email}</a></p>
          </address>
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-outline-variant">
            ${G.map(a=>`<a href="${a.href}" class="inline-flex items-center gap-1.5 font-label-caps text-label-caps transition-colors hover:text-tertiary-fixed"><span class="material-symbols-outlined text-[16px]" aria-hidden="true">${a.icon}</span><span>${a.label}</span></a>`).join("")}
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left font-body-sm text-body-sm text-outline">
        <p>\xA9 ${new Date().getFullYear()} ${L} Retreat &amp; School. Registered Yoga School (RYS 200).</p>
        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label-caps text-label-caps uppercase tracking-wider">
          ${A.legal.map(a=>`<li><a href="${p(a.href)}" class="transition-colors hover:text-inverse-on-surface">${a.label}</a></li>`).join("")}
        </ul>
      </div>
    </footer>`)}var c=(e,a=document)=>a.querySelector(e),d=(e,a=document)=>Array.from(a.querySelectorAll(e)),U=0,T=(e="pb")=>`${e}-${++U}`,j=e=>e&&e.classList.remove("hidden"),q=e=>e&&e.classList.add("hidden"),f=e=>document.documentElement.classList.toggle("is-locked",e);var Q=window.matchMedia("(min-width: 1024px)");function C(){let e=c("[data-menu-toggle]"),a=c("#mobile-menu"),r=c("[data-menu-icon]");if(!e||!a)return;let i=t=>{a.hidden=!t,e.setAttribute("aria-expanded",String(t)),e.setAttribute("aria-label",t?"Close menu":"Open menu"),r&&(r.textContent=t?"close":"menu"),f(t)},s=()=>!a.hidden;e.addEventListener("click",()=>i(!s())),a.addEventListener("click",t=>{t.target.closest("a")&&i(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&s()&&(i(!1),e.focus())}),document.addEventListener("click",t=>{s()&&!t.target.closest("[data-site-header]")&&i(!1)}),Q.addEventListener("change",t=>t.matches&&i(!1)),d("[data-submenu-toggle]",a).forEach(t=>{let l=document.getElementById(t.getAttribute("aria-controls")),o=c(".material-symbols-outlined",t);t.addEventListener("click",()=>{let n=t.getAttribute("aria-expanded")!=="true";t.setAttribute("aria-expanded",String(n)),l.classList.toggle("hidden",!n),o==null||o.classList.toggle("rotate-180",n)})}),d("[data-dropdown]").forEach(t=>{let l=c("[data-dropdown-toggle]",t),o=n=>l.setAttribute("aria-expanded",String(n));t.addEventListener("mouseenter",()=>o(!0)),t.addEventListener("mouseleave",()=>o(!1)),t.addEventListener("focusin",()=>o(!0)),t.addEventListener("focusout",n=>!t.contains(n.relatedTarget)&&o(!1))})}function M(){d("[data-accordion]").forEach(e=>{let a=e.dataset.accordion!=="multiple",r=d("[data-accordion-item]",e),i=(s,t)=>{let l=c("[data-accordion-trigger]",s),o=c("[data-accordion-panel]",s),n=c("[data-accordion-icon]",s);o.classList.toggle("hidden",!t),l.setAttribute("aria-expanded",String(t)),n==null||n.classList.toggle("rotate-180",t)};r.forEach(s=>{let t=c("[data-accordion-trigger]",s),l=c("[data-accordion-panel]",s);!t||!l||(l.id||(l.id=T("acc")),t.setAttribute("aria-controls",l.id),t.setAttribute("aria-expanded","false"),t.tagName!=="BUTTON"&&(t.setAttribute("role","button"),t.tabIndex=0,t.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),t.click())})),t.addEventListener("click",()=>{let o=l.classList.contains("hidden");a&&r.forEach(n=>n!==s&&i(n,!1)),i(s,o)}))})})}function O(){d("[data-filter-group]").forEach(e=>{let a=e.dataset.filterGroup,r=(e.dataset.activeClass||"").split(/\s+/).filter(Boolean),i=(e.dataset.inactiveClass||"").split(/\s+/).filter(Boolean),s=d("[data-filter]",e),t=d(`[data-filter-item="${a}"]`),l=o=>{s.forEach(n=>{let m=n.dataset.filter===o;n.classList.remove(...m?i:r),n.classList.add(...m?r:i),n.setAttribute("aria-pressed",String(m))}),t.forEach(n=>{let m=(n.dataset.category||"").split(/\s+/);n.classList.toggle("hidden",!(o==="all"||m.includes(o)))})};s.forEach(o=>o.addEventListener("click",()=>l(o.dataset.filter)))})}var h=null;function J(e,a=null){var r;e&&(h=a,e.classList.remove("hidden"),f(!0),(r=c("input, select, textarea, button",e))==null||r.focus())}function b(e){e&&(e.classList.add("hidden"),f(!1),h==null||h.focus(),h=null)}function I(){d("[data-modal-open]").forEach(e=>e.addEventListener("click",()=>J(c(e.dataset.modalOpen),e))),d('[role="dialog"]').forEach(e=>{d("[data-modal-close]",e).forEach(a=>a.addEventListener("click",()=>b(e))),e.addEventListener("click",a=>a.target===e&&b(e))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&d('[role="dialog"]:not(.hidden)').forEach(b)})}function P(){d("[data-prefill-target]").forEach(e=>e.addEventListener("click",()=>{let a=c(e.dataset.prefillTarget);a&&(a.value=e.dataset.prefillValue)}))}var z=e=>new Promise(a=>setTimeout(a,e));function F(){d("form[data-form]").forEach(e=>{e.addEventListener("submit",async a=>{a.preventDefault();let r=c('[type="submit"]',e),i=r==null?void 0:r.innerHTML,{endpoint:s,success:t,hide:l,loadingText:o}=e.dataset;r&&o&&(r.disabled=!0,r.innerHTML=`<span class="material-symbols-outlined animate-spin text-[18px]" aria-hidden="true">progress_activity</span><span>${o}</span>`);try{if(s){let m=await fetch(s,{method:"POST",body:new FormData(e),headers:{Accept:"application/json"}});if(!m.ok)throw new Error(`Request failed (${m.status})`)}else o&&await z(900)}catch(m){console.error(m),r&&(r.disabled=!1,r.innerHTML=i),window.alert("Sorry, we couldn't send your request. Please try again or contact us on WhatsApp.");return}l&&(l==="self"?[e]:d(l)).forEach(q);let n=t?c(t):null;n&&(j(n),"scroll"in e.dataset&&n.scrollIntoView({behavior:"smooth",block:"center"})),"reset"in e.dataset&&e.reset(),r&&(r.disabled=!1,r.innerHTML=i),e.dataset.alert&&window.alert(e.dataset.alert),e.dataset.closeModal&&b(c(e.dataset.closeModal))})})}function H(){E(document.getElementById("site-header")),S(document.getElementById("site-footer")),C(),M(),O(),I(),P(),F()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",H):H();})();
