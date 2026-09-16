(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const status = document.querySelector('.toast');
  let timer;
  function announce(message) {
    clearTimeout(timer);
    status.textContent = message;
    status.classList.add('visible');
    timer = setTimeout(() => status.classList.remove('visible'), 4000);
  }
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copy);
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Unavailable');
        await navigator.clipboard.writeText(target.textContent.trim());
        announce('已複製。在 Codex 開啟練習資料夾後，就可以貼上。');
      } catch {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges(); selection.addRange(range);
        announce('請複製已選取的任務文字。');
      }
    });
  });
  function openTarget() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (target && target.tagName === 'DETAILS') target.open = true;
  }
  window.addEventListener('hashchange', openTarget);
  openTarget();
})();
