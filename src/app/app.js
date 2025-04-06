import { createFooter, createHeader, createMain } from './components';
import { initRouter } from './router';

export const app = () => {
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  document.body.innerHTML = '';
  document.body.append(header, main, footer);

  initRouter();
};
