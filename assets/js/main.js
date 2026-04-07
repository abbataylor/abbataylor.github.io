// AbbaSoft Neo - main.js
// CDN-based libraries used (AOS, Typed.js, EmailJS). Local fallbacks exist in assets/vendor/.

/* Initialize AOS */
AOS.init({duration:900,easing:'ease-out-cubic',once:true,mirror:false});

/* Preloader */
window.addEventListener('load',()=>{
  const pre = document.getElementById('preloader');
  if(pre){
    pre.style.opacity = '0';
    pre.style.pointerEvents = 'none';
    setTimeout(()=>pre.remove(),600);
  }
});

/* Typed.js typing effect — uses config roles if available */
const typingEl = document.getElementById('typing');
if(typingEl){
  const roles = (typeof PORTFOLIO !== 'undefined' && PORTFOLIO.typedRoles)
    ? PORTFOLIO.typedRoles
    : ["Full-Stack Developer","UI/UX Designer","IT Solutions Specialist","Database Engineer","Software Engineer","Tech Entrepreneur"];
  if(typeof Typed !== 'undefined'){
    new Typed('#typing',{strings:roles,typeSpeed:60,backSpeed:30,backDelay:1500,loop:true});
  }
}

/* Parallax hero background movement */
const heroBg = document.getElementById('heroBg');
window.addEventListener('mousemove',(e)=>{
  const x = (e.clientX / window.innerWidth - 0.5) * 16;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  if(heroBg) heroBg.style.transform = `translate(${x}px, ${y}px)`;
});

/* Theme toggle */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
if(themeToggle){
  // Restore saved preference
  if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light-theme');
    if(themeIcon){ themeIcon.classList.remove('bx-moon'); themeIcon.classList.add('bx-sun'); }
  }
  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    if(themeIcon){
      themeIcon.classList.toggle('bx-moon', !isLight);
      themeIcon.classList.toggle('bx-sun', isLight);
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

/* Mobile menu toggle */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if(menuToggle && nav){
  // Inject close button into nav if not already there
  if(!nav.querySelector('.nav-close')){
    const closeBtn = document.createElement('button');
    closeBtn.className = 'nav-close';
    closeBtn.innerHTML = '<i class="bx bx-x"></i>';
    closeBtn.setAttribute('aria-label','Close menu');
    nav.prepend(closeBtn);
    closeBtn.addEventListener('click', () => nav.classList.remove('open'));
  }
  menuToggle.addEventListener('click', () => nav.classList.add('open'));
  // Close when any nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
  // Close on backdrop tap (click outside nav links)
  nav.addEventListener('click', (e) => {
    if(e.target === nav) nav.classList.remove('open');
  });
}

/* Scroll to top button */
const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{ if(window.scrollY>300){ if(scrollTop) scrollTop.style.display='block' } else { if(scrollTop) scrollTop.style.display='none' } });
if(scrollTop) scrollTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Projects filter */
const filters = document.querySelectorAll('.filter');
const projectsGrid = document.getElementById('projectsGrid');
if(filters && projectsGrid){
  filters.forEach(btn=>{
    btn.addEventListener('click',()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const projects = projectsGrid.querySelectorAll('.project');
      projects.forEach(p=>{
        if(filter==='all' || p.dataset.category===filter){ p.style.display='block'; } else { p.style.display='none'; }
      });
    });
  });
}

/* Contact form (EmailJS integration stub) */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // If you want to enable EmailJS, paste your keys below and uncomment the init/send lines.
    
    emailjs.init('r4XIzhSdXi6qi3XJX');
    const formData = {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value
    };
    emailjs.send('service_4706n15','template_j7fb1xo',formData)
      .then(()=>{ alert('✅ Message sent successfully!'); contactForm.reset(); })
      .catch(err=>{ alert('❌ Something went wrong, please try again.'); console.error(err); });
  });
}

/* Custom cursor */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2, posX = mouseX, posY = mouseY;
window.addEventListener('mousemove',(e)=>{ mouseX = e.clientX; mouseY = e.clientY; if(cursor){ cursor.style.left = mouseX+'px'; cursor.style.top = mouseY+'px'; } });
function animateFollower(){ posX += (mouseX - posX) * 0.12; posY += (mouseY - posY) * 0.12; if(follower){ follower.style.left = posX+'px'; follower.style.top = posY+'px'; } requestAnimationFrame(animateFollower); }
animateFollower();

/* Year */
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
// Smooth scroll for section links (guards against empty # and missing targets)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(!href || href === '#') return;
    const target = document.querySelector(href);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===============================
// Skill Progress Animation
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.width = target.getAttribute("data-skill");
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => observer.observe(bar));
});




