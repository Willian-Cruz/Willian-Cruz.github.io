(function () {
  'use strict';

  var root = document.documentElement;
  var button = document.querySelector('.theme');

  // Tema claro e escuro: o valor inicial já foi aplicado no <head>
  function syncButton() {
    if (button) button.setAttribute('aria-pressed', root.dataset.theme === 'dark' ? 'true' : 'false');
  }
  syncButton();

  if (button) {
    button.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('tema', next); } catch (e) {}
      syncButton();
    });
  }

  // As ligações do pipeline se desenham uma vez, quando ele aparece na tela
  var flow = document.querySelector('.flow');
  if (flow) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            flow.classList.add('is-drawn');
            observer.disconnect();
          }
        });
      }, { threshold: 0.35 });
      observer.observe(flow);
    } else {
      flow.classList.add('is-drawn');
    }
  }
})();
