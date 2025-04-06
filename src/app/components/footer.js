import { createLayout, createLogo } from 'shared/components';

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const layout = createLayout();
  const logo = createLogo({
    className: 'footer__logo',
    width: 275,
    height: 60,
  });

  const content = document.createElement('div');
  content.className = 'footer__content';
  content.innerHTML = `
    <ul class="footer__developers">
      <li class="footer__developers-item">
        Designer:
        <a
          class="footer__developers-link link-active"
          href="mailto:methted@gmail.com"
        >
          Anastasia Ilina
        </a>
      </li>

      <li class="footer__developers-item">
        Developer:
        <a
          class="footer__developers-link link-active"
          href="mailto:methted@gmail.com"
        >
          Emilyan Aesthetic
        </a>
      </li>
    </ul>

    <div class="footer__contacts">
      <div class="footer__phone">
        <svg
          class="visible-mobile"
          width="12"
          height="14"
          aria-hidden="true"
        >
          <use xlink:href="#phone" />
        </svg>
        <a class="footer__phone-link link-active" href="tel:+79398391297">
          +7 (939) 839 12 97
        </a>
      </div>

      <div class="footer__social">
        <ul class="footer__social-list">
          <li class="footer__social-item">
            <a class="footer__social-link link-active" href="#">
              <svg width="23" height="23" aria-hidden="true">
                <use xlink:href="/sprite.svg#vk" />
              </svg>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link link-active" href="#">
              <svg width="20" height="14" aria-hidden="true">
                <use xlink:href="/sprite.svg#youtube" />
              </svg>
            </a>
          </li>
          <li class="footer__social-item">
            <a class="footer__social-link link-active" href="#">
              <svg width="24" height="24" aria-hidden="true">
                <use xlink:href="/sprite.svg#telegram" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p class="footer__copyright">©SKI People, 2025</p>
  `;

  layout.append(logo, content);
  footer.append(layout);

  return footer;
};
