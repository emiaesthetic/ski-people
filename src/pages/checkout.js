import { createLayout, createTable, createTitle } from 'shared/components';
import { CART, CART_TABLE } from 'shared/data';
import { renderToPage } from 'shared/helpers';

const createCart = ({ data }) => {
  const cart = document.createElement('ul');
  cart.className = 'checkout__cart cart';

  data.forEach(({ id, title, src, price }) => {
    const item = document.createElement('li');
    item.className = 'cart-item';
    item.innerHTML = `
      <a class="cart-item__img" href="#">
        <img
          src="${src}"
          width="120"
          height="90"
          alt="${title}"
          loading="lazy"
        />
      </a>

      <div class="cart-item__details">
        <div class="cart-item__header">
          <div class="cart-item__summary">
            <h3 class="cart-item__title">
              <a class="cart-item__link link-active" href="#">
                ${title}
              </a>
            </h3>
            <p class="cart-item__id">арт.&nbsp;${id}</p>
          </div>
          <p class="cart-item__price hidden-mobile">
            ${price}
          </p>
        </div>

        <div class="cart-item__footer">
          <div class="cart-item__counter counter">
            <button
              class="counter__button counter__button--minus"
              type="button"
              aria-label="Уменьшить количество"
              aria-controls="84348945757"
            >
              -
            </button>
            <span
              class="counter__value"
              id="84348945757"
              aria-live="polite"
            >
              1
            </span>
            <button
              class="counter__button counter__button--plus"
              type="button"
              aria-label="Увеличить количество"
              aria-controls="84348945757"
            >
              +
            </button>
          </div>

          <p class="cart-item__price visible-mobile">
            5&nbsp;000&nbsp;₽
          </p>
        </div>
      </div>
    `;

    cart.append(item);
  });

  return cart;
};

const createOrder = () => {
  const order = document.createElement('div');
  order.className = 'checkout__order order';
  order.innerHTML = `
    <h3 class="order__title">Оформление</h3>
    <div class="order__details">
      <p class="order__count">
        <span class="order__number">4</span>
        &nbsp;товара на&nbsp;сумму:
      </p>
      <p class="order__count">20&nbsp;000&nbsp;₽</p>
    </div>
    <p class="order__delivery">Доставка&nbsp;0&nbsp;₽</p>
    <button
      class="order__button button button--accent"
      type="submit"
      form="cartForm"
    >
      Оформить заказ
    </button>
  `;

  return order;
};

const createForm = () => {
  const formWrapper = document.createElement('div');
  formWrapper.className = 'checkout__delivery-wrapper';

  const form = document.createElement('form');
  form.className = 'checkout__delivery delivery';
  form.id = 'cartForm';
  form.ariaLabel = 'Форма оформления заказа';
  form.innerHTML = `
    <h3 class="delivery__title">Данные для доставки</h3>

    <div class="delivery__content">
      <fieldset class="delivery__personal">
        <input
          class="delivery__input"
          type="text"
          name="name"
          placeholder="Фамилия Имя Отчество"
          required
        />
        <input
          class="delivery__input"
          type="tel"
          name="tel"
          placeholder="Телефон"
          required
        />
        <input
          class="delivery__input"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          class="delivery__input"
          type="text"
          name="address"
          placeholder="Адрес доставки"
          required
        />
        <textarea
          class="delivery__input delivery__input--textarea"
          name="comment"
          id="comment"
          placeholder="Комментарий к заказу"
        ></textarea>
      </fieldset>

      <fieldset class="delivery__extra">
        <legend class="delivery__legend">Доставка</legend>
        <div class="delivery__field">
          <input
            class="delivery__radio"
            type="radio"
            name="deliveryType"
            value="delivery"
            id="delivery"
            required
          />
          <label class="delivery__label" for="delivery">
            Доставка
          </label>
        </div>

        <div class="delivery__field">
          <input
            class="delivery__radio"
            type="radio"
            name="deliveryType"
            value="pickup"
            id="pickup"
          />
          <label class="delivery__label" for="pickup">
            Самовывоз
          </label>
        </div>
      </fieldset>

      <fieldset class="delivery__extra">
        <legend class="delivery__legend">Оплата</legend>
        <div class="delivery__field">
          <input
            class="delivery__radio"
            type="radio"
            name="paymentType"
            value="card"
            id="card"
            required
          />
          <label class="delivery__label" for="card">
            Картой при получении
          </label>
        </div>
        <div class="delivery__field">
          <input
            class="delivery__radio"
            type="radio"
            name="paymentType"
            value="cash"
            id="cash"
          />
          <label class="delivery__label" for="cash">
            Наличными при получении
          </label>
        </div>
      </fieldset>
    </div>
  `;

  formWrapper.append(form);

  return formWrapper;
};

const createOrderSuccess = ({ data }) => {
  const orderSuccess = document.createElement('div');
  orderSuccess.className = 'checkout__order-success order-success';

  const container = document.createElement('div');
  container.className = 'order-success__container';

  const header = document.createElement('div');
  header.className = 'order-success__header';
  header.innerHTML = `
    <h3 class="order-success__title">Заказ успешно размещен</h3>
    <p class="order-success__price">20&nbsp;000&nbsp;₽</p>
  `;

  const orderNumber = document.createElement('p');
  orderNumber.className = 'order-success__number';
  orderNumber.textContent = '№43435';

  const table = createTable({
    data,
    title: 'Заказ успешно размещен',
    className: 'order-success__table',
  });

  const link = document.createElement('a');
  link.className = 'order-success__link button button--accent';
  link.href = '/';
  link.textContent = 'На главную';

  container.append(header, orderNumber, table, link);
  orderSuccess.append(container);

  return orderSuccess;
};

export const renderCheckoutPage = (onSuccess = false) => {
  const section = document.createElement('section');
  section.className = 'checkout';

  const layout = createLayout();
  const title = createTitle('checkout__title', 'Корзина');

  const content = document.createElement('div');
  content.className = 'checkout__content';

  const cart = createCart({ data: CART });
  const order = createOrder();
  const form = createForm();
  const orderSuccess = createOrderSuccess({ data: CART_TABLE });

  if (onSuccess) {
    title.classList.add('visually-hidden');
    content.append(orderSuccess);
  } else {
    content.append(cart, order, form);
  }

  layout.append(title, content);
  section.append(layout);

  renderToPage(section);
};
