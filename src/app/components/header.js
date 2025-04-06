import { createLayout, createLogo } from 'shared/components';

export const createSearch = () => {
  const search = document.createElement('form');
  search.className = 'header__search search';
  search.innerHTML = `
    <input
      class="search__input"
      type="search"
      name="search"
      placeholder="Введите запрос"
    />
    <button class="search__button" type="submit" aria-label="Поиск">
      <svg width="16" height="16" aria-hidden="true">
        <use xlink:href="/sprite.svg#search" />
      </svg>
    </button>
  `;

  return search;
};

export const createUserActions = () => {
  const actions = document.createElement('ul');
  actions.className = 'header__user-actions user-actions';
  actions.innerHTML = `
    <li class="user-actions__item">
      <a class="user-actions__link link-active" href="/favorite">
        <span class="user-actions__text hidden-mobile">Избранное</span>
        <svg width="16" height="14" aria-hidden="true">
          <use xlink:href="/sprite.svg#favorite" />
        </svg>
      </a>
    </li>
    <li class="user-actions__item">
      <a class="user-actions__link link-active" href="/checkout">
        <span class="user-actions__text hidden-mobile">Корзина</span>
        <span class="user-actions__count">(5)</span>
        <svg width="16" height="16" aria-hidden="true">
          <use xlink:href="/sprite.svg#cart" />
        </svg>
      </a>
    </li>
  `;

  return actions;
};

export const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const wrapper = document.createElement('div');
  wrapper.classList.add('header__content');

  const layout = createLayout();
  const logo = createLogo({
    className: 'header__logo',
    width: 130,
    height: 28,
  });
  const search = createSearch();
  const userActions = createUserActions();

  wrapper.append(logo, search, userActions);
  layout.append(wrapper);
  header.append(layout);

  return header;
};
