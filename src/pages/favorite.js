import { createBreadcrumbs, createGoods } from 'shared/components';
import { FAVORITE_BREADCRUMBS, GOODS } from 'shared/data';
import { renderToPage } from 'shared/helpers';

export const renderFavoritePage = () => {
  const breadcrumbs = createBreadcrumbs({ data: FAVORITE_BREADCRUMBS });
  const goods = createGoods({ data: GOODS, title: 'Избранное' });

  renderToPage(breadcrumbs, goods);
};
