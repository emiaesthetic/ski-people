import { createLayout, createTitle } from 'shared/components';

const createCard = ({ title, src, price }) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card__content">
      <div class="card__img">
        <img
          src=${src}
          width="302"
          height="250"
          alt=${title}
          loading="lazy"
        />
      </div>

      <div class="card__details">
        <h3 class="card__title">
          <a class="card__link" href="/product">${title}</a>
        </h3>
        <p class="card__price">${price}</p>
      </div>

      <button
        class="card__add-to-favorite button-favorite"
        type="button"
        aria-label="Добавить в избранное"
      >
        <svg width="16" height="14" aria-hidden="true">
          <use xlink:href="/sprite.svg#favorite" />
        </svg>
      </button>
    </div>

    <button class="card__add-to-cart button" type="button">
      В корзину
    </button>
  `;
  return card;
};

export const createGoods = ({ data, title }) => {
  const section = document.createElement('section');
  section.classList.add('goods');

  const layout = createLayout();

  if (title) {
    const h2 = createTitle('goods__title', title);
    layout.append(h2);
  }

  if (data) {
    const goodsList = document.createElement('ul');
    goodsList.classList.add('goods__list');

    data.forEach(product => {
      const item = document.createElement('li');
      item.classList.add('goods__item');
      const card = createCard(product);
      item.append(card);
      goodsList.append(item);
    });

    layout.append(goodsList);
  }

  section.append(layout);

  return section;
};
