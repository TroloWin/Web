/* Barra de progreso */
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = pct + '%';

  const toTop = document.getElementById('toTop');
  if (h.scrollTop > 500) toTop.classList.add('show');
  else toTop.classList.remove('show');
});

/* Botón volver arriba */
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Nav activa según la sección visible */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`nav a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, {rootMargin:'-40% 0px -55% 0px'});
sections.forEach(s => spy.observe(s));