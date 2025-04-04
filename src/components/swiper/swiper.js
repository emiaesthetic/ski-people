import 'swiper/css';

import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Thumbs } from 'swiper/modules';

export const initSwiper = () => {
  const thumbs = new Swiper('.slider__thumbnails', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: { spaceBetween: 14 },
      1024: { spaceBetween: 12 },
    },
  });

  new Swiper('.slider__current', {
    modules: [Keyboard, Navigation, Mousewheel, Thumbs],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.slider__current-button--next',
      prevEl: '.slider__current-button--prev',
    },
    thumbs: {
      swiper: thumbs,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    mousewheel: {
      releaseOnEdges: true,
      invert: false,
    },
  });
};
