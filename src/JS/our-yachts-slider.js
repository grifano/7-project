// SplideJS
import Splide from '@splidejs/splide';

var splide = new Splide('.splide', {
  type: 'loop',
  gap: 25,
  arrows: false,
  pagination: true,
  mediaQuery: 'min',
  breakpoints: {
    1280: {
      destroy: true,
    },
  },
});
var bar = splide.root.querySelector('.slider-progress-bar');

// Updates the bar width whenever the carousel moves:
splide.on('mounted move', function () {
  var end = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + '%';
});

splide.mount();
