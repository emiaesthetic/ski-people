import Navigo from 'navigo';
import {
  renderCheckoutPage,
  renderFavoritePage,
  renderHomePage,
  renderProductPage,
} from 'pages';
import { clearMainContent } from 'shared/helpers';

export const initRouter = () => {
  const router = new Navigo('/');

  router
    .on('/', () => {
      clearMainContent();
      renderHomePage();
    })
    .on('/favorite', () => {
      clearMainContent();
      renderFavoritePage();
    })
    .on('/product', () => {
      clearMainContent();
      renderProductPage();
    })
    .on('/checkout', () => {
      clearMainContent();
      renderCheckoutPage();
      // renderCheckoutPage(true);
    })
    .resolve();
};
