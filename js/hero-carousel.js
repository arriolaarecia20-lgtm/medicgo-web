(() => {
  const carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;
  const header = document.querySelector('.site-header');
  const measureHeader = () => carousel.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  measureHeader();
  new ResizeObserver(measureHeader).observe(header);
  const slides = [...carousel.querySelectorAll('.hero-slide')];
  const indicators = [...carousel.querySelectorAll('.hero-indicators button')];
  const play = carousel.querySelector('.hero-play');
  const controls = carousel.querySelector('.hero-controls');
  const status = carousel.querySelector('.hero-status');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, timer = null, playing = !motion.matches;
  let hovering = false, focused = false;

  // Every state change clears the previous timeout before scheduling one.
  function schedule() {
    clearTimeout(timer);
    timer = null;
    const running = playing && !hovering && !focused && !document.hidden;
    play.textContent = playing ? 'Ⅱ' : '▶';
    play.setAttribute('aria-label', playing ? 'Pausar carrusel' : 'Reproducir carrusel');
    play.title = playing ? 'Pausar carrusel' : 'Reproducir carrusel';
    status.setAttribute('aria-live', running ? 'off' : 'polite');
    if (running) timer = setTimeout(() => show(index + 1), 4000);
  }
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      slide.setAttribute('aria-hidden', String(i !== index));
      if (i === index) indicators[i].setAttribute('aria-current', 'true');
      else indicators[i].removeAttribute('aria-current');
    });
    status.textContent = `Fotografía ${index + 1} de ${slides.length}`;
    schedule();
  }
  controls.hidden = false;
  carousel.querySelectorAll('[data-direction]').forEach(button => {
    button.addEventListener('click', () => show(index + Number(button.dataset.direction)));
  });
  indicators.forEach((button, i) => button.addEventListener('click', () => show(i)));
  play.addEventListener('click', () => { playing = !playing; schedule(); });
  // A pointer resting over the full-screen background must not block startup.
  // Pause while the user interacts with the controls instead.
  controls.addEventListener('mouseenter', () => { hovering = true; schedule(); });
  controls.addEventListener('mouseleave', () => { hovering = false; schedule(); });
  carousel.addEventListener('focusin', () => { focused = true; schedule(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { focused = false; schedule(); }
  });
  carousel.addEventListener('keydown', event => {
    focused = true;
    schedule();
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { if (motion.matches) playing = false; schedule(); });
  window.addEventListener('pagehide', () => { clearTimeout(timer); timer = null; });
  window.addEventListener('pageshow', schedule);
  schedule();
})();
