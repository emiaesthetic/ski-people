export const renderToPage = (...elements) => {
  const pageContent = document.querySelector('.main__content');
  pageContent.append(...elements);
};
