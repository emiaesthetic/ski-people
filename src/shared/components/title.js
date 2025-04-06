export const createTitle = (extraClass, text) => {
  const title = document.createElement('h2');
  title.classList.add('title');
  if (extraClass) title.classList.add(extraClass);
  title.textContent = text;
  return title;
};
