/* PORTFOLIO WIDYA APRILIA — interaktivitas */
(function () {
  'use strict';

  /* ---------- scroll progress bar ---------- */
  const progress = document.getElementById('progress');
  const toTop = document.getElementById('toTop');

  /* ---------- mobile menu ---------- */
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
    })
  );

  /* ---------- typewriter ---------- */
  const roles = [
    'Software Developer',
    'Web Developer',
    'Data Enthusiast',
    'Machine Learning Enthusiast',
    'Fresh Graduate Teknik Informatika',
  ];
  const typedEl = document.getElementById('typed');
  let role = 0, char = 0, deleting = false;

  function type() {
    const current = roles[role];
    typedEl.textContent = current.slice(0, char);
    let delay = deleting ? 45 : 90;

    if (!deleting && char === current.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && char === 0) {
      deleting = false;
      role = (role + 1) % roles.length;
      delay = 350;
    }

    char += deleting ? -1 : 1;
    setTimeout(type, delay);
  }
  type();

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- counter stats ---------- */
  function animateCount(el) {
    const target = +(el.dataset.count || 0);
    const dur = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countEls = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  countEls.forEach((el) => cio.observe(el));

  /* ---------- nav active state + progress + back-to-top ---------- */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('#menu a'));

  function onScroll() {
    const y = window.scrollY;
    const doc = document.documentElement;
    const total = doc.scrollHeight - window.innerHeight;
    progress.style.width = (total > 0 ? (y / total) * 100 : 0) + '%';

    toTop.classList.toggle('show', y > 600);

    let current = sections[0];
    sections.forEach((s) => {
      if (y >= s.offsetTop - 140) current = s;
    });
    navLinks.forEach((a) =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + current.id)
    );
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* ---------- cursor glow mengikuti mouse di hero ---------- */
  const hero = document.querySelector('.hero');
  if (hero && matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      hero.style.setProperty('--mx', x + 'px');
      hero.style.setProperty('--my', y + 'px');
    });
  }
})();