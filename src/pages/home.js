import { createGoods, createLayout } from 'shared/components';
import { CATALOG, GOODS } from 'shared/data';
import { renderToPage } from 'shared/helpers';

const createCatalogList = data => {
  const list = document.createElement('ul');
  list.classList.add('catalog__list');

  data.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('catalog__item');

    const link = document.createElement('a');
    link.classList.add('catalog__link');
    if (index === 0) link.classList.add('catalog__link--is-active');
    link.href = item.path;
    link.textContent = item.title;

    li.append(link);
    list.append(li);
  });

  return list;
};

const createCatalog = ({ data }) => {
  const catalog = document.createElement('div');
  catalog.className = 'catalog';

  const layout = createLayout('catalog__container');
  const list = createCatalogList(data);

  layout.append(list);
  catalog.append(layout);

  return catalog;
};

export const renderHomePage = () => {
  const catalog = createCatalog({ data: CATALOG });
  const goods = createGoods({ data: GOODS });

  renderToPage(catalog, goods);
};
