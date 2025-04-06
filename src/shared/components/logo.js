export const createLogo = ({ className, width, height }) => {
  const logo = document.createElement('a');
  logo.href = '/';
  logo.className = `${className} logo`;
  logo.title = 'Переход на главную страницу';
  logo.ariaLabel = 'Переход на главную страницу';
  logo.innerHTML = `
    <svg width="${width}" height="${height}" aria-hidden="true">
      <use xlink:href="/sprite.svg#logo" />
    </svg>
  `;

  return logo;
};
