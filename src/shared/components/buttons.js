export const createButton = ({
  className,
  ariaLabel,
  children,
  type = 'button',
}) => {
  const button = document.createElement('button');
  button.className = className;
  button.type = type;
  if (ariaLabel) button.ariaLabel = ariaLabel;
  button.innerHTML = `${children}`;

  return button;
};
