import { createLayout } from './layout';

export const createBreadcrumbs = ({ data }) => {
  const breadcrumbs = document.createElement('nav');
  breadcrumbs.className = 'breadcrumbs';
  breadcrumbs.ariaLabel = 'Хлебные крошки';

  const layout = createLayout();

  const list = document.createElement('ol');
  list.className = 'breadcrumbs__list';

  data.forEach((crumb, index) => {
    const item = document.createElement('li');
    item.className = 'breadcrumbs__item';

    if (index === data.length - 1) {
      const span = document.createElement('span');
      span.className = 'breadcrumbs__current';
      span.textContent = crumb.title;

      item.append(span);
      item.ariaCurrent = 'page';
    } else {
      const link = document.createElement('a');
      link.className = 'breadcrumbs__link link-active';
      link.textContent = crumb.title;
      link.href = crumb.href;
      link.ariaLabel = crumb.ariaLabel;

      item.append(link);
    }

    list.append(item);
  });

  layout.append(list);
  breadcrumbs.append(layout);

  return breadcrumbs;
};
