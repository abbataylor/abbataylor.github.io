/* ============================================================
   PORTFOLIO INIT — reads PORTFOLIO config and renders all
   dynamic sections across the site.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PORTFOLIO === 'undefined') return;

  initAvailableBadge();
  initSocialLinks();
  initStats();
  initSkillBars();
  initSkillCategories();
  initTimeline();
  initCertifications();
  initProcess();
  initTestimonials();
  initCounters();
  initProjects();
});

/* ── Available for hire badge ───────────────────────────── */
function initAvailableBadge() {
  const el = document.getElementById('available-badge');
  if (!el) return;
  if (PORTFOLIO.personal.available) {
    el.innerHTML = `<span class="pulse-dot"></span> Available for hire`;
    el.className = 'available-badge';
    el.style.display = 'inline-flex';
  } else {
    el.style.display = 'none';
  }
}

/* ── Social links (footer + hero) ───────────────────────── */
function initSocialLinks() {
  const { github, linkedin, twitter, whatsapp } = PORTFOLIO.social;
  document.querySelectorAll('[data-social="github"]').forEach(a => {
    if (github) { a.href = github; a.style.display = ''; }
    else a.style.display = 'none';
  });
  document.querySelectorAll('[data-social="linkedin"]').forEach(a => {
    if (linkedin) { a.href = linkedin; a.style.display = ''; }
    else a.style.display = 'none';
  });
  document.querySelectorAll('[data-social="twitter"]').forEach(a => {
    if (twitter) { a.href = twitter; a.style.display = ''; }
    else a.style.display = 'none';
  });
  document.querySelectorAll('[data-social="whatsapp"]').forEach(a => {
    if (whatsapp) { a.href = whatsapp; a.style.display = ''; }
    else a.style.display = 'none';
  });
}

/* ── Stats ──────────────────────────────────────────────── */
function initStats() {
  const containers = document.querySelectorAll('[data-stats-container]');
  containers.forEach(container => {
    container.innerHTML = PORTFOLIO.stats.map(s => `
      <div class="stat">
        <div class="num neon counter-num" data-target="${s.number}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div>${s.label}</div>
      </div>`).join('');
  });
}

/* ── Animated counters ──────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(interval);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ── Skill bars ─────────────────────────────────────────── */
function initSkillBars() {
  const el = document.getElementById('skills-bars-container');
  if (!el || !PORTFOLIO.skills) return;

  el.innerHTML = PORTFOLIO.skills.map(s => `
    <div class="skill-item">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>`).join('');

  const bars = el.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
}

/* ── Skill Categories (Tech Stack) ─────────────────────── */
function initSkillCategories() {
  const el = document.getElementById('skill-categories-container');
  if (!el || !PORTFOLIO.skillCategories) return;

  el.innerHTML = PORTFOLIO.skillCategories.map((cat, i) => `
    <div class="skill-cat-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="skill-cat-header">
        <i class='bx ${cat.icon}'></i>
        <h3>${cat.title}</h3>
      </div>
      <div class="skill-cat-items">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>`).join('');
}

/* ── Timeline ───────────────────────────────────────────── */
function initTimeline() {
  const el = document.getElementById('timeline-container');
  if (!el || !PORTFOLIO.timeline) return;

  el.innerHTML = PORTFOLIO.timeline.map(item => `
    <div class="tl-item" data-aos="fade-up">
      <span class="tl-type ${item.type}">${item.type === 'education' ? '🎓 Education' : '💼 Work'}</span>
      <div class="tl-year">${item.year}</div>
      <div class="tl-title">${item.title}</div>
      <div class="tl-place">${item.place}</div>
      <div class="tl-desc">${item.description}</div>
    </div>`).join('');
}

/* ── Certifications ─────────────────────────────────────── */
function initCertifications() {
  const el = document.getElementById('certs-container');
  if (!el || !PORTFOLIO.certifications) return;

  el.innerHTML = PORTFOLIO.certifications.map(c => `
    <div class="cert-card" data-aos="fade-up">
      <i class='bx bx-award cert-icon'></i>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-year">${c.year}</div>
      </div>
    </div>`).join('');
}

/* ── How I Work (Process) ───────────────────────────────── */
function initProcess() {
  const el = document.getElementById('process-container');
  if (!el || !PORTFOLIO.process) return;

  el.innerHTML = PORTFOLIO.process.map((p, i) => `
    <div class="process-step" data-aos="fade-up" data-aos-delay="${i * 100}">
      <span class="step-number">${p.step}</span>
      <i class='bx ${p.icon}'></i>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>`).join('');
}

/* ── Testimonials ───────────────────────────────────────── */
function initTestimonials() {
  const el = document.getElementById('testimonials-container');
  if (!el || !PORTFOLIO.testimonials) return;

  el.innerHTML = PORTFOLIO.testimonials.map((t, i) => `
    <div class="testi-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="quote-mark">"</div>
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ── Projects Grid (projects.html) ─────────────────────── */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !PORTFOLIO.projects) return;

  grid.innerHTML = PORTFOLIO.projects.map((p, i) => {
    const imageHtml = p.image
      ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
      : `<div class="proj-placeholder proj-cat-${p.category}"><i class='bx ${_categoryIcon(p.category)}'></i><span>${p.subtitle}</span></div>`;

    const demoBtn = p.liveDemo
      ? `<a href="${p.liveDemo}" class="link-demo" target="_blank" rel="noopener"><i class='bx bx-link-external'></i> View UI</a>`
      : '';

    const githubBtn = (!p.isPrivate && p.github)
      ? `<a href="${p.github}" class="link-github" target="_blank" rel="noopener"><i class='bx bxl-github'></i> GitHub</a>`
      : (p.isPrivate ? `<span class="link-private"><i class='bx bx-lock-alt'></i> Private</span>` : '');

    const caseStudyBtn = `<a href="project-detail.html?id=${p.id}" class="link-case-study"><i class='bx bx-book-open'></i> Case Study</a>`;

    const privateBadge = p.isPrivate
      ? `<span class="proj-badge badge-private"><i class='bx bx-lock-alt'></i> Private</span>`
      : `<span class="proj-badge badge-public"><i class='bx bxl-github'></i> Public</span>`;

    const statusClass = p.status === 'Live' ? 'badge-live' : (p.status === 'In Progress' ? 'badge-wip' : 'badge-done');
    const statusBadge = `<span class="proj-badge ${statusClass}">${p.status}</span>`;

    return `
      <div class="project" data-category="${p.category}" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        ${imageHtml}
        <div class="project-meta">
          <div class="proj-badges">${privateBadge}${statusBadge}</div>
          <h3 class="project-name">${p.title}</h3>
          <p class="project-subtitle-text">${p.subtitle}</p>
          <p class="project-short-desc">${p.shortDesc}</p>
          <div class="project-tags">
            ${p.technologies.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
            ${p.technologies.length > 4 ? `<span class="tag tag-more">+${p.technologies.length - 4}</span>` : ''}
          </div>
          <div class="project-links">
            ${demoBtn}${githubBtn}${caseStudyBtn}
          </div>
        </div>
      </div>`;
  }).join('');
}

function _categoryIcon(cat) {
  const icons = { system: 'bx-cog', webdev: 'bx-code-alt', design: 'bx-palette', data: 'bx-bar-chart-alt-2', frontend: 'bx-window-alt' };
  return icons[cat] || 'bx-code-block';
}
