// AbbaSoft Neo - main.js

/* Initialize AOS */
AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true, mirror: false });

/* Preloader */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    pre.style.opacity = '0';
    pre.style.pointerEvents = 'none';
    setTimeout(() => pre.remove(), 600);
  }
});

/* Typed.js typing effect */
const typingEl = document.getElementById('typing');
if (typingEl) {
  const roles = (typeof PORTFOLIO !== 'undefined' && PORTFOLIO.typedRoles)
    ? PORTFOLIO.typedRoles
    : ["Full-Stack Developer", "UI/UX Designer", "IT Solutions Specialist"];
  if (typeof Typed !== 'undefined') {
    new Typed('#typing', { strings: roles, typeSpeed: 60, backSpeed: 30, backDelay: 1500, loop: true });
  }
}

/* Parallax hero background */
const heroBg = document.getElementById('heroBg');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 16;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  if (heroBg) heroBg.style.transform = `translate(${x}px, ${y}px)`;
});

/* Theme toggle */
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
if (themeToggle) {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) { themeIcon.classList.remove('bx-moon'); themeIcon.classList.add('bx-sun'); }
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    if (themeIcon) {
      themeIcon.classList.toggle('bx-moon', !isLight);
      themeIcon.classList.toggle('bx-sun', isLight);
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

/* Mobile menu toggle (with CSS transition via .open class) */
const menuToggle = document.getElementById('menuToggle');
const nav        = document.getElementById('nav');
if (menuToggle && nav) {
  if (!nav.querySelector('.nav-close')) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'nav-close';
    closeBtn.innerHTML = '<i class="bx bx-x"></i>';
    closeBtn.setAttribute('aria-label', 'Close menu');
    nav.prepend(closeBtn);
    closeBtn.addEventListener('click', () => {
      nav.classList.remove('open');
      nav.classList.add('closing');
      setTimeout(() => nav.classList.remove('closing'), 300);
    });
  }
  menuToggle.addEventListener('click', () => nav.classList.add('open'));
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      nav.classList.add('closing');
      setTimeout(() => nav.classList.remove('closing'), 300);
    });
  });
  nav.addEventListener('click', (e) => {
    if (e.target === nav) {
      nav.classList.remove('open');
      nav.classList.add('closing');
      setTimeout(() => nav.classList.remove('closing'), 300);
    }
  });
}

/* Scroll to top */
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (scrollTop) scrollTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
if (scrollTop) scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* Projects filter */
const filters      = document.querySelectorAll('.filter');
const projectsGrid = document.getElementById('projectsGrid');
if (filters.length && projectsGrid) {
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter   = btn.getAttribute('data-filter');
      const projects = projectsGrid.querySelectorAll('.project');
      projects.forEach(p => {
        p.style.display = (filter === 'all' || p.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

/* Contact form — validation + EmailJS */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.field-err').forEach(el => el.textContent = '');
    const note = document.getElementById('formNote');
    if (note) note.textContent = '';

    const name    = (document.getElementById('contactName')  || { value: contactForm.name.value }).value.trim();
    const email   = (document.getElementById('contactEmail') || { value: contactForm.email.value }).value.trim();
    const message = (document.getElementById('contactMsg')   || { value: contactForm.message.value }).value.trim();

    let valid = true;

    if (!name) {
      _setErr('err-name', 'Please enter your name.');
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      _setErr('err-email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!message || message.length < 10) {
      _setErr('err-message', 'Please write a message (at least 10 characters).');
      valid = false;
    }

    if (!valid) return;

    const submitBtn = document.getElementById('contactSubmit') || contactForm.querySelector('[type=submit]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending…'; }

    emailjs.init('r4XIzhSdXi6qi3XJX');
    emailjs.send('service_4706n15', 'template_j7fb1xo', {
      from_name:  name,
      from_email: email,
      subject:    (document.getElementById('contactSubject') || { value: '' }).value.trim() || 'Portfolio Contact',
      message:    message
    })
    .then(() => {
      if (note) { note.textContent = '✅ Message sent! I\'ll reply within 24 hours.'; note.style.color = '#00e676'; }
      contactForm.reset();
    })
    .catch(err => {
      if (note) { note.textContent = '❌ Something went wrong. Please email me directly at mosesmbularinaabba@gmail.com'; note.style.color = '#ff6b6b'; }
      console.error(err);
    })
    .finally(() => {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="bx bx-send"></i> Send Message'; }
    });
  });
}

function _setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

/* Custom cursor */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, posX = mouseX, posY = mouseY;
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (cursor) { cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; }
});
(function animateFollower() {
  posX += (mouseX - posX) * 0.12;
  posY += (mouseY - posY) * 0.12;
  if (follower) { follower.style.left = posX + 'px'; follower.style.top = posY + 'px'; }
  requestAnimationFrame(animateFollower);
})();

/* Footer year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* Skill progress bar animation (legacy .progress elements) */
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.progress');
  if (!skillBars.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-skill');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(bar => observer.observe(bar));
});
