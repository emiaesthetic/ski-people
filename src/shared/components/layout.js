export const createLayout = (extraClass = '') => {
  const layout = document.createElement('div');
  layout.classList.add('container');
  if (extraClass) layout.classList.add(extraClass);

  return layout;
};
