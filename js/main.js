/**
 * ============================================================
 * MAIN.JS — rendu du contenu + interactions.
 * Tout le texte vient de PORTFOLIO_DATA (js/data.js).
 * Tu n'as normalement pas besoin de modifier ce fichier.
 * ============================================================
 */
(function () {
  'use strict';

  const D = PORTFOLIO_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const byId = Object.fromEntries(D.projects.map(p => [p.id, p]));
  const featuredCount = D.featured || 6;

  const refLink = (id) => (id && byId[id])
    ? `<a class="ref" href="#${id}" data-case="${id}" title="${esc(byId[id].title)}">${esc(shortName(byId[id]))}</a>` : '';
  function shortName(p) { return p.title.split(/ — | sous | d'une | du /)[0].replace(/^Chaîne IIoT.*/, 'IIoT'); }
  const imgOf = (p) => (p.image && p.image.src) ? p.image : null;
  const credit = (im) => im && im.illustration ? `Photo d'illustration — ${im.credit} / Unsplash` : '';

  // ---------------------------------------------------------------
  // HERO
  // ---------------------------------------------------------------
  function renderHero() {
    const id = D.identity, h = D.hero || {};
    const parts = id.name.split(' ');
    $('#heroName').innerHTML = `<span class="line"><span>${esc(parts[0])}</span></span><span class="line"><span>${esc(parts.slice(1).join(' '))}</span></span>`;
    $('#heroLine').textContent = id.heroLine;
    $('#heroCaption').textContent = id.heroCaption || '';
    $('#topName').textContent = id.name;
    ['#heroCv', '#contactCv', '#footCv'].forEach(s => { $(s).href = id.cvFile; });
    ['#introLinkedin', '#footLinkedin'].forEach(s => { $(s).href = id.linkedin; });
    $('#footGithub').href = id.github;

    if (h.drone) $('#heroDrone').src = h.drone;
    if (h.sky && h.sky.src) {
      const img = new Image();
      img.onload = () => {
        const layer = `linear-gradient(180deg, rgba(203,216,230,.15), rgba(250,248,244,0) 60%), url("${h.sky.src}")`;
        $('#heroSky').style.backgroundImage = layer;
        $('#contactSky').style.backgroundImage = `url("${h.sky.src}")`;
      };
      img.src = h.sky.src;
    }
  }

  // ---------------------------------------------------------------
  // MISSION
  // ---------------------------------------------------------------
  function renderIntro() {
    const it = D.intro;
    $('#introTitle').textContent = it.title;
    $('#introParas').innerHTML = it.paragraphs.map(p => `<p>${esc(p)}</p>`).join('');
    $('#introPhotos').innerHTML = (it.photos || []).map((ph, i) => `
      <figure class="photo-card reveal" style="transition-delay:${i * 140}ms">
        <div class="ph"><img src="${esc(ph.src)}" alt="${esc(ph.caption)}" loading="lazy"></div>
        <figcaption>${esc(ph.caption)}</figcaption>
      </figure>`).join('');
  }

  // ---------------------------------------------------------------
  // PROJETS
  // ---------------------------------------------------------------
  function renderProjects() {
    const featured = D.projects.slice(0, featuredCount);
    const others = D.projects.slice(featuredCount);

    $('#projectGrid').innerHTML = featured.map((p, i) => {
      const im = imgOf(p);
      const m = p.metric && p.metric.value;
      return `
      <button class="proj reveal" type="button" id="${esc(p.id)}" data-case="${esc(p.id)}" style="transition-delay:${(i % 2) * 120}ms" aria-label="Lire l'étude : ${esc(p.title)}">
        <span class="proj-media${im && im.fit === 'contain' ? ' contain' : ''}" style="display:block">
          ${im ? `<img src="${esc(im.src)}" alt="${esc(im.alt || p.title)}" loading="lazy">` : ''}
          ${p.status ? `<span class="proj-tag">${esc(p.status)}</span>` : ''}
          ${im && im.illustration ? `<span class="proj-illu">Photo d'illustration</span>` : ''}
        </span>
        <span class="proj-meta"><span class="proj-title">${esc(p.title)}</span><span class="proj-year">${esc((p.year || '').replace('En cours · ', ''))}</span></span>
        <span class="proj-line">${esc(p.tagline || p.kind)}</span>
        ${m ? `<span class="proj-metric"><b>${esc(p.metric.value)}</b>${esc(p.metric.label)}</span>` : ''}
      </button>`;
    }).join('');

    const rows = others.map(p => `
      <li><button type="button" id="${esc(p.id)}" data-case="${esc(p.id)}">
        <span class="o-title">${esc(p.title)}</span><span class="o-line">${esc(p.tagline || '')}</span>
        <span class="o-year">${esc(p.year || '')}</span><span class="o-arrow" aria-hidden="true">→</span>
      </button></li>`);
    (D.earlierWork || []).forEach(w => rows.push(`
      <li><div class="row">
        <span class="o-title">${esc(w.title)}</span><span class="o-line">${esc(w.stack)}</span>
        <span class="o-year">${esc((w.period || '').replace(/.*(\d{4})$/, '$1'))}</span><span></span>
      </div></li>`));
    $('#othersList').innerHTML = rows.join('');
  }

  // ---------------------------------------------------------------
  // ÉTUDE DE CAS
  // ---------------------------------------------------------------
  const dlg = $('#caseDialog');
  let current = null, lastFocus = null;

  function caseHTML(p) {
    const idx = D.projects.indexOf(p);
    const prev = D.projects[idx - 1], next = D.projects[idx + 1];
    const im = imgOf(p);
    const facts = [];
    if (p.metric && p.metric.value) facts.push(`<span><b>${esc(p.metric.value)}</b>${esc(p.metric.label)}</span>`);
    if (p.year) facts.push(`<span>${esc(p.year)}</span>`);
    const flow = (p.pipeline || []).length ? `<div class="full"><p class="case-label">Chaîne technique</p><div class="case-flow">${p.pipeline.map(x => `<span>${esc(x)}</span>`).join('<i>→</i>')}</div></div>` : '';
    const results = (p.results || []).length ? `<div class="full"><p class="case-label">Résultats</p><ul class="case-results">${p.results.map(r => `<li>${esc(r)}</li>`).join('')}</ul></div>` : '';
    const note = p.method ? `<div class="full case-note"><p class="case-label">Point de méthode</p><p>${esc(p.method)}</p></div>` : '';
    const gallery = (p.gallery || []).length ? `<div class="full"><p class="case-label">Images du projet</p><div class="case-gallery">${p.gallery.map(g => `<figure><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}</figcaption></figure>`).join('')}</div></div>` : '';
    return `
      <button class="case-close" type="button" data-close aria-label="Fermer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>
      </button>
      ${im ? `<div class="case-hero${im.fit === 'contain' ? ' contain' : ''}"><img src="${esc(im.src)}" alt="${esc(im.alt || p.title)}">${credit(im) ? `<span class="credit">${esc(credit(im))}</span>` : ''}</div>` : ''}
      <header class="case-head">
        <p class="case-kind">${esc(p.kind)}</p>
        <h2 id="caseTitle">${esc(p.title)}</h2>
        <p class="case-summary">${esc(p.summary)}</p>
        ${facts.length ? `<div class="case-facts">${facts.join('')}</div>` : ''}
      </header>
      <div class="case-body">
        <div><p class="case-label">Problème</p><p>${esc(p.problem)}</p></div>
        <div><p class="case-label">Réalisation</p><p>${esc(p.built)}</p></div>
        ${flow}${results}${note}${gallery}
        <div class="full"><p class="case-label">Outils</p><div class="case-tools">${(p.stack || []).map(s => `<span>${esc(s)}</span>`).join('')}</div></div>
      </div>
      <nav class="case-nav" aria-label="Autres projets">
        <button type="button" data-case="${prev ? prev.id : ''}" ${prev ? '' : 'disabled'}>← ${prev ? esc(prev.title) : ''}</button>
        <button type="button" data-case="${next ? next.id : ''}" ${next ? '' : 'disabled'}>${next ? esc(next.title) : ''} →</button>
      </nav>`;
  }

  function openCase(id) {
    const p = byId[id];
    if (!p || !dlg) return;
    if (!dlg.open) lastFocus = document.activeElement;
    current = id;
    $('#caseContent').innerHTML = caseHTML(p);
    keepTogether($('#caseContent'));
    if (!dlg.open) {
      if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
      document.body.classList.add('modal-open');
    }
    dlg.scrollTop = 0;
    $('.case-close', dlg).focus({ preventScroll: true });
    history.replaceState(null, '', '#' + id);
  }

  function bindCases() {
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-case]');
      if (t && t.dataset.case) { e.preventDefault(); openCase(t.dataset.case); return; }
      if (e.target.closest('[data-close]')) dlg.close();
    });
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      history.replaceState(null, '', location.pathname + location.search);
      if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
      current = null;
    });
    dlg.addEventListener('keydown', (e) => {
      if (!current) return;
      const i = D.projects.findIndex(p => p.id === current);
      if (e.key === 'ArrowRight' && D.projects[i + 1]) openCase(D.projects[i + 1].id);
      if (e.key === 'ArrowLeft' && D.projects[i - 1]) openCase(D.projects[i - 1].id);
    });
    const h = location.hash.slice(1);
    if (byId[h]) setTimeout(() => openCase(h), 300);
  }

  // ---------------------------------------------------------------
  // CE QUE JE FAIS
  // ---------------------------------------------------------------
  function renderSkills() {
    $('#skillGrid').innerHTML = D.skills.map((s, i) => `
      <div class="do reveal" style="transition-delay:${(i % 3) * 100}ms">
        <span class="do-num">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
        <button class="do-toggle" type="button" aria-expanded="false"><span class="plus" aria-hidden="true"></span><span class="lbl">Voir le détail</span></button>
        <div class="do-body"><div>
          ${(s.subcategories || []).map(sub => `
            <div class="sub">
              <h4>${esc(sub.name)}</h4>
              <div class="sub-tools">${(sub.tools || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>
              ${(sub.achievements || []).length ? `<ul>${sub.achievements.map(a => {
                const it = typeof a === 'string' ? { text: a } : a;
                return `<li>${esc(it.text)}${refLink(it.ref)}</li>`;
              }).join('')}</ul>` : ''}
            </div>`).join('')}
        </div></div>
      </div>`).join('');
    $$('.do').forEach(card => {
      const btn = $('.do-toggle', card);
      btn.addEventListener('click', () => {
        const open = !card.classList.contains('open');
        card.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
        $('.lbl', btn).textContent = open ? 'Masquer le détail' : 'Voir le détail';
      });
    });
  }

  // ---------------------------------------------------------------
  // PARCOURS
  // ---------------------------------------------------------------
  function renderPath() {
    $('#timeline').innerHTML = D.timeline.map(t => `
      <li>
        <span class="tl-when">${esc(t.period)}</span>
        <div><div class="tl-what">${esc(t.title)}</div><div class="tl-where">${esc(t.place)}</div>
        ${t.status ? `<span class="tl-status">${esc(t.status)}</span>` : ''}</div>
      </li>`).join('');
    $('#langs').innerHTML = D.languages.map(l => `<div><dt>${esc(l.name)}</dt><dd>${esc(l.level)}</dd></div>`).join('');
    $('#interests').innerHTML = (D.interests || []).map(x => `<span>${esc(x)}</span>`).join(' ');
    const c = D.cursus;
    $('#cursusTitle').textContent = c.title;
    $('#cursusContent').innerHTML = c.semesters.map(s => `<div class="sem"><b>${esc(s.label)}</b><span>${s.modules.map(esc).join(' · ')}</span></div>`).join('');
    const fold = $('#cursusFold'), btn = $('#cursusBtn');
    btn.addEventListener('click', () => {
      const open = !fold.classList.contains('open');
      fold.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // ---------------------------------------------------------------
  // ENGAGEMENT
  // ---------------------------------------------------------------
  function renderEngagement() {
    $('#engGrid').innerHTML = D.engagement.map((e, i) => {
      const ph = e.image && e.image.src;
      return `
      <article class="eng reveal${ph ? ' has-photo' : ''}" style="transition-delay:${(i % 3) * 90}ms">
        ${ph ? `<div class="eng-photo"><img src="${esc(e.image.src)}" alt="${esc(e.image.alt || e.title)}" loading="lazy"></div>` : ''}
        <div class="eng-body">
          ${e.date ? `<p class="eng-date">${esc(e.date)}</p>` : ''}
          <h3>${esc(e.title)}</h3>
          ${e.org ? `<p class="eng-org">${esc(e.org)}</p>` : ''}
          ${e.quote ? `<blockquote>« ${esc(e.quote)} »</blockquote>` : ''}
          ${(e.points || []).length ? `<ul>${e.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        </div>
      </article>`;
    }).join('');
  }

  // ---------------------------------------------------------------
  // CONTACT + PIED DE PAGE
  // ---------------------------------------------------------------
  function renderContact() {
    const id = D.identity;
    const mailto = `mailto:${id.email}?subject=${encodeURIComponent('Contact depuis votre portfolio')}`;
    $('#contactMail').textContent = id.email;
    $('#contactMail').href = mailto;
    $('#copyMail').addEventListener('click', async () => {
      const m = $('#copyMsg');
      try { await navigator.clipboard.writeText(id.email); m.textContent = 'Adresse copiée.'; }
      catch (err) { m.textContent = id.email; }
      setTimeout(() => { m.textContent = ''; }, 3500);
    });
    const credits = new Set();
    D.projects.forEach(p => { const im = imgOf(p); if (im && im.illustration && im.credit) credits.add(im.credit); });
    if (D.hero && D.hero.sky && D.hero.sky.credit) credits.add(D.hero.sky.credit);
    $('#footText').textContent = `© ${new Date().getFullYear()} ${id.name} · ${id.location}`;
    $('#footCredits').textContent = credits.size
      ? `Photos d'illustration et ciel : ${[...credits].join(', ')} — Unsplash. Rendus, captures et photos de projets : Songo Yao Mensah.` : '';
  }

  // ---------------------------------------------------------------
  // ANIMATIONS
  // ---------------------------------------------------------------
  function initMotion() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window) || reduce) { els.forEach(e => e.classList.add('in')); }
    else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
      els.forEach(e => io.observe(e));

      const links = $$('[data-nav]');
      const spy = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id)); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      $$('main section[id]').forEach(s => spy.observe(s));
    }

    // Barre du haut + parallaxe douce du drone
    const bar = $('#topbar'), drone = $('#heroDrone'), hero = $('.hero');
    let ticking = false, entered = false;
    setTimeout(() => { entered = true; }, 2600);
    const onScroll = () => {
      const y = window.scrollY;
      bar.classList.toggle('scrolled', y > 40);
      if (!reduce && entered && y < hero.offsetHeight) {
        drone.style.animation = 'none'; drone.style.opacity = '1';
        drone.style.transform = `translate(${-y * 0.12}px, ${-y * 0.22}px)`;
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();
  }

  // Une image introuvable disparaît proprement
  document.addEventListener('error', (e) => { if (e.target && e.target.tagName === 'IMG') e.target.style.visibility = 'hidden'; }, true);

  // Empêche la coupure de « BIRD-X » (ou de tout mot avec trait d'union court) en fin de ligne
  function keepTogether(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const hits = [];
    while (walker.nextNode()) if (/BIRD-X/.test(walker.currentNode.nodeValue)) hits.push(walker.currentNode);
    hits.forEach(node => {
      const frag = document.createDocumentFragment();
      node.nodeValue.split(/(BIRD-X)/).forEach(part => {
        if (part === 'BIRD-X') { const s = document.createElement('span'); s.style.whiteSpace = 'nowrap'; s.textContent = part; frag.appendChild(s); }
        else if (part) frag.appendChild(document.createTextNode(part));
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function safe(fn) { try { fn(); } catch (err) { console.error('[portfolio]', fn.name, err); } }
  document.addEventListener('DOMContentLoaded', () => {
    [renderHero, renderIntro, renderProjects, renderSkills, renderPath, renderEngagement, renderContact, bindCases, initMotion].forEach(safe);
    safe(function nobreak() { keepTogether(document.getElementById('main')); });
  });
})();
