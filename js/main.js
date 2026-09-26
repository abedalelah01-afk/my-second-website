/* Rayash Real Estate — site behavior & renderers */

function fmt(n){ return Number(n).toLocaleString("en-US"); }
function lang(){ return getLang(); }

/* ---------------- Header / nav / scroll chrome ---------------- */
function initHeader(){
  const header = document.querySelector(".site-header");
  if(!header) return;
  const forceSolid = header.hasAttribute("data-force-solid");
  const onScroll = ()=>{
    if(forceSolid || window.scrollY > 60) header.classList.add("solid"); else header.classList.remove("solid");
    const backTop = document.querySelector(".back-to-top");
    if(backTop) backTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if(toggle && nav){
    toggle.addEventListener("click", ()=>{
      nav.classList.toggle("open");
      toggle.classList.toggle("active");
    });
    nav.querySelectorAll(".nav-link").forEach(l=>l.addEventListener("click", ()=>{
      nav.classList.remove("open"); toggle.classList.remove("active");
    }));
  }

  const backTop = document.querySelector(".back-to-top");
  if(backTop) backTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));
}

function initWhatsapp(){
  document.querySelectorAll(".wa-link").forEach(el=>{
    const msg = el.getAttribute("data-wa-msg") || (lang()==="ar" ? "مرحباً، أرغب بالاستفسار عن عقار." : "Hello, I'd like to inquire about a property.");
    el.href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
  });
}
document.addEventListener("langchange", initWhatsapp);

function initFooterYear(){
  document.querySelectorAll(".js-year").forEach(el=> el.textContent = new Date().getFullYear());
}

/* ---------------- Reveal on scroll ---------------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!items.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:.15 });
  items.forEach(i=>io.observe(i));
}

/* ---------------- Counters ---------------- */
function initCounters(){
  const strip = document.querySelector(".stats-strip");
  if(!strip) return;
  const nums = strip.querySelectorAll(".stat-num");
  let done = false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const run = ()=>{
    if(done) return; done = true;
    nums.forEach(el=>{
      const target = parseFloat(el.getAttribute("data-target"));
      const suffix = el.getAttribute("data-suffix") || "";
      const decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals")) : 0;
      if(reduceMotion){
        el.textContent = (decimals ? target.toFixed(decimals) : Math.round(target).toLocaleString("en-US")) + suffix;
        return;
      }
      const dur = 1600, start = performance.now();
      const step = (now)=>{
        const p = Math.min(1, (now-start)/dur);
        const eased = 1 - Math.pow(1-p, 3);
        const val = target * eased;
        el.textContent = (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US")) + suffix;
        if(p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) run(); });
  }, { threshold:.4 });
  io.observe(strip);
}

/* ---------------- Lightbox ---------------- */
let lightboxEl, lightboxState = { images:[], index:0, trigger:null };

function buildLightbox(){
  if(lightboxEl) return lightboxEl;
  const el = document.createElement("div");
  el.className = "lightbox";
  el.setAttribute("role","dialog");
  el.setAttribute("aria-modal","true");
  el.innerHTML = `
    <button class="lightbox-close" aria-label="close" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <button class="lightbox-nav prev" aria-label="previous" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <img class="lightbox-img" alt="">
    <button class="lightbox-nav next" aria-label="next" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="lightbox-counter"></div>
  `;
  document.body.appendChild(el);
  el.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  el.querySelector(".lightbox-nav.prev").addEventListener("click", ()=>stepLightbox(-1));
  el.querySelector(".lightbox-nav.next").addEventListener("click", ()=>stepLightbox(1));
  el.addEventListener("click", e=>{ if(e.target === el) closeLightbox(); });
  document.addEventListener("keydown", e=>{
    if(!el.classList.contains("open")) return;
    if(e.key === "Escape") closeLightbox();
    else if(e.key === "ArrowRight") stepLightbox(1);
    else if(e.key === "ArrowLeft") stepLightbox(-1);
  });
  lightboxEl = el;
  return el;
}

function renderLightbox(){
  const { images, index } = lightboxState;
  const img = lightboxEl.querySelector(".lightbox-img");
  img.src = images[index];
  lightboxEl.querySelector(".lightbox-counter").textContent = `${index+1} / ${images.length}`;
}

function stepLightbox(dir){
  const n = lightboxState.images.length;
  lightboxState.index = (lightboxState.index + dir + n) % n;
  renderLightbox();
}

function openLightbox(images, index, altBase){
  const el = buildLightbox();
  lightboxState = { images, index, trigger: document.activeElement };
  el.querySelector(".lightbox-img").alt = altBase || "";
  renderLightbox();
  el.classList.add("open");
  el.querySelector(".lightbox-close").focus();
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  if(!lightboxEl) return;
  lightboxEl.classList.remove("open");
  document.body.style.overflow = "";
  if(lightboxState.trigger && lightboxState.trigger.focus) lightboxState.trigger.focus();
}

/* ---------------- Property card ---------------- */
function propertyCardHTML(p){
  const L = lang();
  const purposeLabel = p.purpose === "sale" ? t("common.forSale") : t("common.forRent");
  const priceSuffix = p.purpose === "rent" ? ` <span>${t("common.perMonth")}</span>` : "";
  return `
  <a href="property.html?id=${p.id}" class="card prop-card reveal">
    <div class="prop-media">
      <img src="${p.cover}" alt="${p.title[L]}" loading="lazy" onerror="this.src='${IMG.skyline}'">
      <span class="prop-badge ${p.purpose==='sale'?'sale':''}">${purposeLabel}</span>
      <button class="prop-fav" type="button" aria-label="favorite" onclick="event.preventDefault()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7.5-4.6-10-9.3C.3 8 2 4 6 4c2.2 0 3.7 1.2 6 3.6C14.3 5.2 15.8 4 18 4c4 0 5.7 4 4 7.7C19.5 16.4 12 21 12 21z" stroke="currentColor" stroke-width="1.6"/></svg>
      </button>
      <div class="prop-price-tag">${fmt(p.price)} ${t("common.sar")}${priceSuffix}</div>
    </div>
    <div class="prop-body">
      <div class="prop-district">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>
        ${p.district[L]}
      </div>
      <h3 class="prop-title">${p.title[L]}</h3>
      <div class="prop-stats">
        ${p.beds ? `<span>${p.beds} ${t("common.beds")}</span>`:""}
        ${p.baths ? `<span>${p.baths} ${t("common.baths")}</span>`:""}
        <span>${fmt(p.area)} ${t("common.sqm")}</span>
      </div>
    </div>
  </a>`;
}

/* ---------------- Home: featured + testimonials ---------------- */
function renderFeatured(){
  const grid = document.getElementById("featured-grid");
  if(!grid) return;
  const list = PROPERTIES.slice(0,6);
  grid.innerHTML = list.map(propertyCardHTML).join("");
  initReveal();
}

function renderTestimonials(){
  const grid = document.getElementById("testimonials-grid");
  if(!grid) return;
  const L = lang();
  grid.innerHTML = TESTIMONIALS.map(x=>`
    <div class="testi-card reveal">
      <div class="testi-stars">${"★★★★★"}</div>
      <p>"${x.text[L]}"</p>
      <div class="testi-person">
        <div class="testi-avatar">${x.name[L].charAt(0)}</div>
        <div><strong>${x.name[L]}</strong><br><span style="color:var(--color-text-soft);font-size:.82rem">${x.role[L]}</span></div>
      </div>
    </div>`).join("");
  initReveal();
}

function initHomeSearch(){
  const form = document.getElementById("quick-search-form");
  if(!form) return;
  const L = lang();
  const districtSel = form.querySelector("[name=district]");
  const typeSel = form.querySelector("[name=type]");
  if(districtSel){
    const districts = [...new Set(PROPERTIES.map(p=>p.district.ar))];
    districtSel.innerHTML = `<option value="">${t("home.allCities")}</option>` +
      districts.map(d=>{
        const p = PROPERTIES.find(x=>x.district.ar===d);
        return `<option value="${d}">${p.district[lang()]}</option>`;
      }).join("");
  }
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const params = new URLSearchParams();
    for(const [k,v] of fd.entries()) if(v) params.set(k,v);
    window.location.href = "properties.html" + (params.toString() ? "?"+params.toString() : "");
  });
}

/* ---------------- Properties listing ---------------- */
const listingState = { purpose:"all", type:"all", district:"all", priceMax:"", beds:"all", sort:"newest" };

function initPropertiesPage(){
  const grid = document.getElementById("properties-grid");
  if(!grid) return;

  const params = new URLSearchParams(window.location.search);
  if(params.get("purpose")) listingState.purpose = params.get("purpose");
  if(params.get("type")) listingState.type = params.get("type");
  if(params.get("district")) listingState.district = params.get("district");
  if(params.get("priceMax")) listingState.priceMax = params.get("priceMax");

  const typeSel = document.getElementById("f-type");
  const districtSel = document.getElementById("f-district");
  const bedsSel = document.getElementById("f-beds");
  const priceMax = document.getElementById("f-price-max");
  const sortSel = document.getElementById("f-sort");
  const tabs = document.querySelectorAll(".tab-btn[data-purpose]");
  let visibleCount = 6;

  function buildOptions(){
    const L = lang();
    const types = ["apartment","villa","land","office"];
    typeSel.innerHTML = `<option value="all">${t("properties.all")}</option>` +
      types.map(ty=>`<option value="${ty}">${t("home.type"+ty.charAt(0).toUpperCase()+ty.slice(1))}</option>`).join("");
    typeSel.value = listingState.type;

    const districts = [...new Set(PROPERTIES.map(p=>p.district.ar))];
    districtSel.innerHTML = `<option value="all">${t("properties.all")}</option>` +
      districts.map(d=>{
        const p = PROPERTIES.find(x=>x.district.ar===d);
        return `<option value="${d}">${p.district[L]}</option>`;
      }).join("");
    districtSel.value = listingState.district;

    bedsSel.value = listingState.beds;
    priceMax.value = listingState.priceMax;
    sortSel.value = listingState.sort;

    tabs.forEach(btn=>btn.classList.toggle("active", btn.getAttribute("data-purpose")===listingState.purpose));
  }

  function filteredList(){
    let list = PROPERTIES.filter(p=>{
      if(listingState.purpose!=="all" && p.purpose!==listingState.purpose) return false;
      if(listingState.type!=="all" && p.type!==listingState.type) return false;
      if(listingState.district!=="all" && p.district.ar!==listingState.district) return false;
      if(listingState.beds!=="all" && !(p.beds >= parseInt(listingState.beds))) return false;
      if(listingState.priceMax && p.price > parseInt(listingState.priceMax)) return false;
      return true;
    });
    if(listingState.sort==="priceAsc") list.sort((a,b)=>a.price-b.price);
    else if(listingState.sort==="priceDesc") list.sort((a,b)=>b.price-a.price);
    else if(listingState.sort==="areaDesc") list.sort((a,b)=>b.area-a.area);
    else list.sort((a,b)=>b.id-a.id);
    return list;
  }

  function render(){
    buildOptions();
    const list = filteredList();
    const countEl = document.getElementById("results-count");
    if(countEl) countEl.textContent = `${list.length} ${t("properties.resultsFound")}`;
    const shown = list.slice(0, visibleCount);
    grid.innerHTML = shown.map(propertyCardHTML).join("");
    const empty = document.getElementById("empty-state");
    if(empty) empty.style.display = list.length ? "none" : "block";
    const loadMoreBtn = document.getElementById("load-more");
    if(loadMoreBtn) loadMoreBtn.style.display = list.length > visibleCount ? "inline-flex" : "none";
    initReveal();
  }

  typeSel.addEventListener("change", ()=>{ listingState.type = typeSel.value; visibleCount=6; render(); });
  districtSel.addEventListener("change", ()=>{ listingState.district = districtSel.value; visibleCount=6; render(); });
  bedsSel.addEventListener("change", ()=>{ listingState.beds = bedsSel.value; visibleCount=6; render(); });
  priceMax.addEventListener("input", ()=>{ listingState.priceMax = priceMax.value; visibleCount=6; render(); });
  sortSel.addEventListener("change", ()=>{ listingState.sort = sortSel.value; render(); });
  tabs.forEach(btn=>btn.addEventListener("click", ()=>{ listingState.purpose = btn.getAttribute("data-purpose"); visibleCount=6; render(); }));
  const resetBtn = document.getElementById("f-reset");
  if(resetBtn) resetBtn.addEventListener("click", ()=>{
    Object.assign(listingState, { purpose:"all", type:"all", district:"all", priceMax:"", beds:"all", sort:"newest" });
    visibleCount=6; render();
  });
  const loadMoreBtn = document.getElementById("load-more");
  if(loadMoreBtn) loadMoreBtn.addEventListener("click", ()=>{ visibleCount += 6; render(); });

  render();
  document.addEventListener("langchange", render);
}

/* ---------------- Property detail page ---------------- */
function initPropertyDetail(){
  const root = document.getElementById("property-detail");
  if(!root) return;
  const id = parseInt(new URLSearchParams(window.location.search).get("id")) || PROPERTIES[0].id;
  const p = PROPERTIES.find(x=>x.id===id) || PROPERTIES[0];

  function render(){
    const L = lang();
    document.title = `${p.title[L]} | ${t("meta.title")}`;
    document.getElementById("d-title").textContent = p.title[L];
    const crumb = document.getElementById("d-title-crumb");
    if(crumb) crumb.textContent = p.title[L];
    const ld = document.getElementById("ld-json");
    if(ld) ld.textContent = JSON.stringify({
      "@context":"https://schema.org","@type":"Residence","name":p.title[L],
      "description":p.desc[L], "numberOfRooms":p.beds,
      "floorSize":{"@type":"QuantitativeValue","value":p.area,"unitCode":"MTK"},
      "address":{"@type":"PostalAddress","addressLocality":p.district.en,"addressCountry":"SA"}
    });
    document.getElementById("d-district").textContent = p.district[L];
    document.getElementById("d-price").textContent = `${fmt(p.price)} ${t("common.sar")}${p.purpose==="rent" ? " "+t("common.perMonth") : ""}`;
    document.getElementById("d-badge").textContent = p.purpose==="sale" ? t("common.forSale") : t("common.forRent");
    document.getElementById("d-desc").textContent = p.desc[L];
    document.getElementById("d-area").textContent = fmt(p.area)+" "+t("common.sqm");
    document.getElementById("d-beds").textContent = p.beds;
    document.getElementById("d-baths").textContent = p.baths;

    const gallery = document.getElementById("d-gallery");
    const galleryImages = [p.gallery[0], p.gallery[1]||p.gallery[0], p.gallery[2]||p.gallery[0], p.gallery[3]||p.gallery[0], p.cover];
    gallery.innerHTML = galleryImages.map((src,i)=>`
      <img class="${i===0?'g-main':'g-side'}" data-idx="${i}" src="${src}" alt="${p.title[L]} ${i+1}" onerror="this.src='${IMG.skyline}'" tabindex="0" role="button" aria-label="${t('property.overview')} ${i+1}">
    `).join("");
    gallery.querySelectorAll("img").forEach(img=>{
      const open = ()=>openLightbox(galleryImages, parseInt(img.dataset.idx), p.title[L]);
      img.addEventListener("click", open);
      img.addEventListener("keydown", e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); open(); } });
    });

    document.getElementById("d-features").innerHTML = p.features[L].map(f=>`
      <div class="feature-chip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        ${f}
      </div>`).join("");

    const mapFrame = document.getElementById("d-map");
    if(mapFrame) mapFrame.src = `https://www.google.com/maps?q=${encodeURIComponent(p.district.en+", Jeddah, Saudi Arabia")}&output=embed`;

    const calcBox = document.getElementById("calc-box");
    if(calcBox) calcBox.style.display = p.purpose === "sale" ? "block" : "none";
    const calcPriceInput = document.getElementById("calc-price");
    if(calcPriceInput && p.purpose === "sale" && !calcPriceInput.dataset.touched) calcPriceInput.value = p.price;

    const waBtn = document.getElementById("d-whatsapp");
    if(waBtn){
      const msg = L==="ar" ? `مرحباً، أرغب بالاستفسار عن: ${p.title.ar}` : `Hello, I'd like to inquire about: ${p.title.en}`;
      waBtn.href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`;
    }

    const similarWrap = document.getElementById("similar-grid");
    if(similarWrap){
      const similar = PROPERTIES.filter(x=>x.id!==p.id && (x.type===p.type || x.district.ar===p.district.ar)).slice(0,3);
      similarWrap.innerHTML = similar.map(propertyCardHTML).join("");
    }
    initReveal();
  }

  render();
  document.addEventListener("langchange", render);
  initCalculator();
}

function initCalculator(){
  const price = document.getElementById("calc-price");
  const down = document.getElementById("calc-down");
  const years = document.getElementById("calc-years");
  const rate = document.getElementById("calc-rate");
  const result = document.getElementById("calc-result");
  if(!price) return;
  function calc(){
    const P = parseFloat(price.value)||0;
    const downPct = parseFloat(down.value)||0;
    const n = (parseFloat(years.value)||1)*12;
    const r = (parseFloat(rate.value)||0)/100/12;
    const loan = P * (1 - downPct/100);
    const monthly = r>0 ? loan * r / (1-Math.pow(1+r,-n)) : loan/n;
    result.textContent = `${fmt(Math.round(monthly))} ${t("common.sar")}`;
  }
  [price,down,years,rate].forEach(el=>el.addEventListener("input", ()=>{ el.dataset.touched="1"; calc(); }));
  calc();
  document.addEventListener("langchange", calc);
}

/* ---------------- Projects page ---------------- */
function renderProjects(){
  const wrap = document.getElementById("projects-list");
  if(!wrap) return;
  function render(){
    const L = lang();
    wrap.innerHTML = PROJECTS.map(pr=>`
      <div class="project-card reveal">
        <div class="project-media"><img src="${pr.cover}" alt="${pr.title[L]}" loading="lazy" onerror="this.src='${IMG.skyline}'"></div>
        <div class="project-body">
          <div class="prop-district">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>
            ${pr.district[L]}
          </div>
          <h3>${pr.title[L]}</h3>
          <p>${pr.desc[L]}</p>
          <div>
            <div class="flex items-center" style="justify-content:space-between;margin-bottom:8px">
              <span style="font-weight:700;font-size:.85rem;color:var(--color-primary-dark)">${t("projects.progress")}</span>
              <span style="font-weight:800;color:var(--color-gold-dark)">${pr.progress}%</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width:${pr.progress}%"></div></div>
          </div>
          <table class="unit-table">
            <thead><tr><th>${t("projects.unitType")}</th><th>${t("projects.totalUnits")}</th><th>${t("projects.status")}</th></tr></thead>
            <tbody>
              ${pr.units.map(u=>`<tr><td>${u[L]}</td><td>${u.total}</td><td><span class="status-pill ${u.status}">${t("projects."+u.status)}</span></td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`).join("");
    initReveal();
  }
  render();
  document.addEventListener("langchange", render);
}

/* ---------------- Forms (contact / booking) ---------------- */
function initFakeForm(formId, successId){
  const form = document.getElementById(formId);
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = t("common.sending");
    btn.disabled = true;
    setTimeout(()=>{
      btn.disabled = false;
      btn.textContent = original;
      const success = document.getElementById(successId);
      if(success){ success.textContent = t("common.successMsg"); success.classList.add("show"); }
      form.reset();
    }, 900);
  });
}

/* ---------------- Company info (footer / contact) ---------------- */
function initCompanyInfo(){
  document.querySelectorAll(".js-phone").forEach(el=>el.textContent = COMPANY.phone);
  document.querySelectorAll(".js-email").forEach(el=>el.textContent = COMPANY.email);
  document.querySelectorAll(".js-phone-href").forEach(el=>el.href = "tel:"+COMPANY.phone);
  document.querySelectorAll(".js-email-href").forEach(el=>el.href = "mailto:"+COMPANY.email);
  document.querySelectorAll(".js-fal").forEach(el=>el.textContent = COMPANY.fal);
  document.querySelectorAll(".js-cr").forEach(el=>el.textContent = COMPANY.cr);
  document.querySelectorAll("[data-social]").forEach(el=>{
    el.href = COMPANY.social[el.getAttribute("data-social")] || "#";
    el.target = "_blank"; el.rel = "noopener";
  });
  const contactMap = document.getElementById("contact-map");
  if(contactMap) contactMap.src = COMPANY.mapEmbed;
  function render(){
    const L = lang();
    document.querySelectorAll(".js-address").forEach(el=>el.textContent = COMPANY.address[L]);
    document.querySelectorAll(".js-hours").forEach(el=>el.textContent = COMPANY.hours[L]);
  }
  render();
  document.addEventListener("langchange", render);
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  initHeader();
  initWhatsapp();
  initFooterYear();
  initCompanyInfo();
  initReveal();
  initCounters();
  renderFeatured();
  renderTestimonials();
  initHomeSearch();
  initPropertiesPage();
  initPropertyDetail();
  renderProjects();
  initFakeForm("contact-form","contact-success");
  initFakeForm("booking-form","booking-success");
});
