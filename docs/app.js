(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const links = [...document.querySelectorAll('nav a')];
  const status = document.querySelector('.copy-status');
  let statusTimer;

  function closeMenu(returnFocus = false) {
    sidebar.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!sidebar.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
  links.forEach(link => link.addEventListener('click', () => {
    closeMenu();
    const target = document.querySelector(link.hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }));

  const sections = links.map(link => document.querySelector(link.hash));
  let scrollQueued = false;
  function updateChapter() {
    const threshold = window.innerWidth <= 860 ? 130 : 90;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }
    links.forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollQueued = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(updateChapter);
    }
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
    updateChapter();
  });
  updateChapter();

  function announce(message) {
    window.clearTimeout(statusTimer);
    status.textContent = message;
    status.classList.add('visible');
    statusTimer = window.setTimeout(() => status.classList.remove('visible'), 3500);
  }
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copy);
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(target.textContent.trim());
        announce('任務已複製，請換成自己的資料後貼到 Codex。');
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(range);
        announce('請複製已選取的任務文字。');
      }
    });
  });
})();
