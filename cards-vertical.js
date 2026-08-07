// cards-vertical.js
// Makes podcast/track cards vertical (thumbnail on top) without changing existing templates or handlers.
// It watches #main-content and transforms cards after render.
(function(){
  'use strict';

  function transformCards() {
    const cards = document.querySelectorAll('#main-content .grid > div');
    if (!cards || cards.length === 0) return;
    cards.forEach(card => {
      if (card.dataset.verticalDone) return;

      // require both an image container and a content area to consider this a podcast card
      const imgContainer = card.querySelector('.relative');
      const contentArea = card.querySelector('.flex-1');
      if (!imgContainer || !contentArea) return;

      // make outer card vertical
      card.classList.remove('gap-3');
      card.classList.add('flex-col');

      // adjust image container classes (remove fixed small sizes)
      imgContainer.classList.remove('w-[110px]');
      imgContainer.classList.remove('md:w-[130px]');
      imgContainer.classList.remove('h-[130px]');
      imgContainer.classList.remove('md:h-[150px]');
      imgContainer.classList.remove('shrink-0');
      imgContainer.classList.add('w-full');
      imgContainer.classList.add('h-44');
      imgContainer.classList.add('md:h-56');

      // ensure image fills the container
      const img = imgContainer.querySelector('img');
      if (img) {
        img.classList.add('w-full');
        img.classList.add('h-full');
        img.classList.add('object-cover');
      }

      // tweak content spacing
      contentArea.classList.remove('py-1');
      contentArea.classList.add('pt-3');

      // mark as transformed
      card.dataset.verticalDone = '1';
    });
  }

  // observe changes in #main-content
  function initObserver(){
    const main = document.getElementById('main-content');
    if (!main) return;

    const mo = new MutationObserver((mutations) => {
      transformCards();
    });
    mo.observe(main, { childList: true, subtree: true });

    // try initial transform + periodic fallback
    setTimeout(transformCards, 200);
    const interval = setInterval(transformCards, 700);
    // stop interval after a few seconds
    setTimeout(() => clearInterval(interval), 8000);
  }

  // run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }
})();
