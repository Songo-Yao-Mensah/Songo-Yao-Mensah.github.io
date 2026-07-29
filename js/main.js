/**
 * ============================================================
 * MAIN.JS — Rendu du contenu + interactions.
 * Ne contient pas de texte en dur : tout vient de PORTFOLIO_DATA
 * (défini dans data.js, chargé avant ce fichier).
 * ============================================================
 */

// ---------------------------------------------------------------
// Petite bibliothèque d'icônes (line-icons, style feather, 24x24)
// ---------------------------------------------------------------
const ICONS = {
  cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3a2 2 0 0 1 0 4h-1M7 5H4a2 2 0 0 0 0 4h1"/>',
  award: '<circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  medal: '<path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  mail: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22 6 12 13 2 6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  github: '<path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/>',
  linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56z"/>'
};

// Returns an inline transition-delay for cascading reveal animations
function stagger(i, base = 70, cap = 6) {
  return `transition-delay:${Math.min(i, cap) * base}ms`;
}

function icon(name, size = 20, filled = false) {
  const body = ICONS[name] || '';
  const fill = filled ? 'currentColor' : 'none';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

// ---------------------------------------------------------------
// RENDER: HERO
// ---------------------------------------------------------------
function renderHero() {
  const d = PORTFOLIO_DATA.identity;
  document.getElementById('heroEyebrow').textContent = `// ${d.role}`;
  document.getElementById('heroName').textContent = d.name;
  document.getElementById('heroLead').textContent = `${d.heroLead} ${d.heroSub}`;
  document.getElementById('heroTags').innerHTML = d.tags.map(t => `<span class="hero-tag">${t}</span>`).join('');
  document.getElementById('heroLoc').innerHTML = `${icon('pin', 15)} ${d.location}`;
  document.getElementById('heroCvBtn').href = d.cvFile;
  document.getElementById('heroCvBtn').setAttribute('download', '');
  document.getElementById('heroGithubBtn').href = d.github;
  document.getElementById('heroLinkedinBtn').href = d.linkedin;
}

// ---------------------------------------------------------------
// RENDER: ABOUT + TIMELINE + CURSUS
// ---------------------------------------------------------------
function renderAbout() {
  document.getElementById('aboutParagraphs').innerHTML =
    PORTFOLIO_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');

  document.getElementById('academicTimeline').innerHTML =
    PORTFOLIO_DATA.academicTimeline.map((item, i) => `
      <div class="timeline-item reveal" data-reveal="left" style="${stagger(i, 110)}">
        <div class="timeline-period">${item.period}${item.status ? `<span class="timeline-status">${item.status}</span>` : ''}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-place">${item.place}</div>
      </div>
    `).join('');

  const c = PORTFOLIO_DATA.cursusApercu;
  document.getElementById('cursusTitle').textContent = c.title;
  document.getElementById('cursusSubtitle').textContent = c.subtitle;
  document.getElementById('cursusContent').innerHTML =
    c.semesters.map(s => `
      <div class="cursus-sem">
        <span class="cursus-sem-label">${s.label}</span>
        <div class="cursus-sem-modules">${s.modules.map(m => `<span>${m}</span>`).join('')}</div>
      </div>
    `).join('') + `<div class="cursus-next">${c.next}</div>`;

  document.getElementById('cursusToggleBtn').addEventListener('click', () => {
    document.getElementById('cursusCard').classList.toggle('open');
  });
}

// ---------------------------------------------------------------
// RENDER: SKILLS (bento + soft)
// ---------------------------------------------------------------
function renderSkills() {
  const chevronSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  document.getElementById('hardSkillsGrid').innerHTML =
    PORTFOLIO_DATA.hardSkills.map((cat, i) => `
      <div class="bento-card reveal ${cat.size === 'wide' ? 'wide' : ''}" data-reveal="scale" data-index="${i}" style="${stagger(i, 90)}">
        <div class="bento-card-head">
          <div class="bento-card-icon">${icon(cat.icon, 19)}</div>
          <div class="bento-chevron">${chevronSvg}</div>
        </div>
        <div class="bento-card-title">${cat.title}</div>
        <div class="bento-subcats">
          ${cat.subcategories.map(sub => `
            <div class="bento-subcat">
              <span class="bento-subcat-name">${sub.name}</span>
              <div class="bento-subcat-tools">${sub.tools.map(t => `<span>${t}</span>`).join('')}</div>
              ${sub.achievements.length ? `<ul class="bento-subcat-achievements">${sub.achievements.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('open'));
  });

  document.getElementById('softSkillsGrid').innerHTML =
    PORTFOLIO_DATA.softSkills.map((cat, i) => `
      <div class="soft-card reveal" data-reveal="up" style="${stagger(i, 100)}">
        <div class="soft-card-icon">${icon(cat.icon, 22)}</div>
        <div class="soft-card-title">${cat.title}</div>
        <ul>${cat.skills.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    `).join('');
}

// ---------------------------------------------------------------
// RENDER: PROJECTS
// ---------------------------------------------------------------
function projectMedia(p) {
  return `
    <div class="project-featured-media blueprint-frame">
      <span class="bp-tr"></span><span class="bp-br"></span>
      <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="project-placeholder">
        ${icon('box', 26)}
        <span>Visuel à venir<br>${p.image.split('/').pop()}</span>
      </div>
    </div>`;
}

function renderProjects() {
  const featured = PORTFOLIO_DATA.projects.find(p => p.featured);
  const rest = PORTFOLIO_DATA.projects.filter(p => !p.featured);

  document.getElementById('projectFeatured').innerHTML = `
    <div class="project-featured reveal" data-reveal="scale">
      ${projectMedia(featured)}
      <div>
        <span class="project-badge">Projet phare</span>
        <div class="project-title">${featured.title}</div>
        <div class="project-period mono">${featured.period}</div>
        <p class="project-desc">${featured.description}</p>
        <div class="project-stack">${featured.stack.map(s => `<span>${s}</span>`).join('')}</div>
      </div>
    </div>`;

  document.getElementById('projectsSecondary').innerHTML = rest.map((p, i) => `
    <div class="project-card reveal" data-reveal="up" style="${stagger(i, 110)}">
      ${projectMedia(p)}
      <div class="project-title">${p.title}</div>
      <div class="project-period mono">${p.period}</div>
      <p class="project-desc">${p.description}</p>
      <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------
// RENDER: DISTINCTIONS
// ---------------------------------------------------------------
function renderDistinctions() {
  document.getElementById('distinctionsList').innerHTML =
    PORTFOLIO_DATA.distinctions.map((d, i) => `
      <div class="distinction-item reveal" data-reveal="left" style="${stagger(i, 90)}">
        <div class="distinction-icon">${icon(d.icon, 20)}</div>
        <div>
          <div class="distinction-title">${d.title}</div>
          <div class="distinction-detail">${d.detail}</div>
        </div>
        <div class="distinction-date mono">${d.date}</div>
      </div>
    `).join('');
}

// ---------------------------------------------------------------
// RENDER: LANGUAGES + INTERESTS
// ---------------------------------------------------------------
function renderLangInterests() {
  document.getElementById('languagesList').innerHTML =
    PORTFOLIO_DATA.languages.map((l, i) => `
      <div class="lang-item reveal" data-reveal="up" data-percent="${l.percent}" style="${stagger(i, 100)}">
        <div class="lang-top">
          <span class="lang-name">${l.name}</span>
          <span class="lang-level">${l.level}</span>
        </div>
        <div class="lang-bar-track"><div class="lang-bar-fill"></div></div>
      </div>
    `).join('');

  document.getElementById('interestsList').innerHTML =
    PORTFOLIO_DATA.interests.map((label, i) => `<span class="interest-pill reveal" data-reveal="pop" style="${stagger(i, 60)}">${label}</span>`).join('');
}

// ---------------------------------------------------------------
// RENDER: CONTACT
// ---------------------------------------------------------------
function renderContact() {
  const d = PORTFOLIO_DATA.identity;
  const links = [
    { icon: 'mail', text: d.email, href: `mailto:${d.email}` },
    { icon: 'phone', text: d.phone, href: `tel:${d.phone.replace(/\s/g, '')}` },
    { icon: 'github', text: 'github.com/Songo-Yao-Mensah', href: d.github },
    { icon: 'linkedin', text: 'LinkedIn', href: d.linkedin },
    { icon: 'pin', text: d.location, href: '' }
  ];
  document.getElementById('contactLinks').innerHTML = links.map((l, i) => `
    <a class="contact-link reveal" data-reveal="left" style="${stagger(i, 80)}" ${l.href ? `href="${l.href}"` : ''} ${l.href && l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      <span class="contact-link-icon">${icon(l.icon, 16)}</span>
      <span class="contact-link-text">${l.text}</span>
    </a>
  `).join('');

  document.getElementById('footerText').textContent =
    `© ${new Date().getFullYear()} ${d.name} — Conçu & codé sur mesure.`;

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const message = document.getElementById('cf-message').value;
    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${d.email}?subject=${subject}&body=${body}`;
  });
}

// ---------------------------------------------------------------
// INTERACTIONS: mobile nav, scroll reveal, language bars
// ---------------------------------------------------------------
function initInteractions() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  }));

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('.lang-bar-fill').forEach(fill => {
      fill.style.width = fill.closest('.lang-item').dataset.percent + '%';
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.lang-bar-fill');
        fill.style.width = entry.target.dataset.percent + '%';
        langObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.lang-item').forEach(el => langObserver.observe(el));
}

// ---------------------------------------------------------------
// HERO PARALLAX — subtle tilt of the technical drawing on mousemove
// ---------------------------------------------------------------
function initHeroParallax() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const visual = document.querySelector('.hero-visual svg');
  if (!visual || reduceMotion || !canHover) return;

  const stage = document.querySelector('.hero-visual');
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    visual.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
  });
  stage.addEventListener('mouseleave', () => {
    visual.style.transform = 'rotateX(0) rotateY(0)';
  });
}

// ---------------------------------------------------------------
// INIT
// ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderDistinctions();
  renderLangInterests();
  renderContact();
  initInteractions();
  initHeroParallax();
});
