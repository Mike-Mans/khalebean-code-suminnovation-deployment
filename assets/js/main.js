// Sticky navbar shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Highlight the active nav link based on current page filename
const currentFile = location.pathname.split('/').pop() || 'index.html';
navLinks.querySelectorAll('a').forEach(link => {
  const linkFile = link.getAttribute('href').split('/').pop();
  if (linkFile === currentFile) link.classList.add('active');
});

// Typewriter effect — word by word, machine font (index page only)
const heroStatement = document.querySelector('.hero-statement');
if (heroStatement) {
  const words = heroStatement.textContent.trim().split(/\s+/);
  heroStatement.textContent = '';

  let w = 0;

  function typeWord() {
    if (w < words.length) {
      heroStatement.textContent += (w === 0 ? '' : ' ') + words[w++];
      setTimeout(typeWord, 110);
    } else {
      heroStatement.classList.add('typed-done');
    }
  }

  setTimeout(typeWord, 400);
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll(
  '.card, .nav-card, .exp-item, .exp-featured, .edu-item, .pub-item-full, .award-card, .membership-card, .timeline-full-item, .contact-detail-item'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});
