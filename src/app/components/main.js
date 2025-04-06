export const createMain = () => {
  const main = document.createElement('main');
  main.className = 'main';

  const title = document.createElement('h1');
  title.className = 'visually-hidden';
  title.textContent = 'Ski People - магазин горнолыжного снаряжения';

  const content = document.createElement('div');
  content.className = 'main__content';

  main.append(title, content);

  return main;
};
