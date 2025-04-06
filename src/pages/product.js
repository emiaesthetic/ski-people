import 'swiper/css';

import {
  createBreadcrumbs,
  createButton,
  createLayout,
  createTable,
  createTitle,
} from 'shared/components';
import {
  PRODUCT_BREADCRUMBS,
  PRODUCT_TABLE,
  SLIDER_CURRENT,
  SLIDER_THUMBS,
} from 'shared/data';
import { renderToPage } from 'shared/helpers';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Thumbs } from 'swiper/modules';

const createCurrentSlider = ({ data }) => {
  const current = document.createElement('div');
  current.className = 'slider__current swiper';

  const currentWrapper = document.createElement('div');
  currentWrapper.className = 'slider__current-wrapper swiper-wrapper';

  data.forEach(item => {
    const img = new Image(832, 688);
    img.className = 'slider__current-slide swiper-slide';
    img.src = item.src;
    img.alt = item.alt;

    currentWrapper.append(img);
  });

  const prevButton = createButton({
    className: 'slider__current-button slider__current-button--prev',
    ariaLabel: 'Назад',
    children: `
      <svg width="8" height="14" aria-hidden="true">
        <use xlink:href="/sprite.svg#arrow" />
      </svg>
    `,
  });

  const nextButton = createButton({
    className: 'slider__current-button slider__current-button--next',
    ariaLabel: 'Вперед',
    children: `
      <svg width="8" height="14" aria-hidden="true">
        <use xlink:href="/sprite.svg#arrow" />
      </svg>
    `,
  });

  current.append(currentWrapper, prevButton, nextButton);

  return current;
};

const createThumbsSlider = ({ data }) => {
  const thumbs = document.createElement('div');
  thumbs.className = 'slider__thumbnails swiper hidden-mobile';

  const thumbsWrapper = document.createElement('div');
  thumbsWrapper.className = 'slider__thumbnails-wrapper swiper-wrapper';

  data.forEach(item => {
    const img = new Image(196, 162);
    img.className = 'slider__current-slide swiper-slide';
    img.src = item.src;
    img.alt = item.alt;

    thumbsWrapper.append(img);
  });

  thumbs.append(thumbsWrapper);

  return thumbs;
};

const createSlider = () => {
  const slider = document.createElement('div');
  slider.className = 'product__slider slider';

  const current = createCurrentSlider({ data: SLIDER_CURRENT });
  const thumbs = createThumbsSlider({ data: SLIDER_THUMBS });

  slider.append(current, thumbs);

  return slider;
};

const createDetails = () => {
  const details = document.createElement('div');
  details.className = 'product__details';

  const price = document.createElement('p');
  price.className = '';
  price.textContent = '';

  const id = document.createElement('p');
  id.className = '';
  id.textContent = '';

  const table = createTable({
    data: PRODUCT_TABLE,
    title: 'Общие характеристики',
    className: 'product__table',
  });

  const actions = document.createElement('div');
  actions.className = 'product__actions';
  actions.innerHTML = `
    <button
      class="product__add-to-cart button button--accent"
      type="button"
    >
      В корзину
    </button>
    <button
      class="product__add-to-favorite button-favorite"
      type="button"
      aria-label="Добавить в избранное"
    >
      <svg width="16" height="14" aria-hidden="true">
        <use xlink:href="/sprite.svg#favorite" />
      </svg>
    </button>
  `;

  details.append(price, id, table, actions);

  return details;
};

const initSwiper = () => {
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

export const renderProductPage = () => {
  const breadcrumbs = createBreadcrumbs({ data: PRODUCT_BREADCRUMBS });

  const section = document.createElement('section');
  section.className = 'product';

  const layout = createLayout();
  const title = createTitle('product__title', 'Горные лыжи');

  const content = document.createElement('div');
  content.classList = 'product__content';
  const slider = createSlider();
  const details = createDetails();

  content.append(slider, details);
  layout.append(title, content);
  section.append(layout);

  renderToPage(breadcrumbs, section);
  initSwiper();
};
