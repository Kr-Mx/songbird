import React from 'react';
import emailIcon from '../../asserts/images/emailIcon.svg';
import githubLogo from '../../asserts/images/githubLogo.png';
import telegramLogo from '../../asserts/images/telegramLogo.png';

export default function FooterContacts() {
  return (
        <ul className='footer__contacts'>
          If you have any suggestion, please contact me:
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="https://github.com/Kr-Mx">
              <img className="footer__contacts-link-image"
                   src={githubLogo}
                   alt="github-logo"/>
            </a>
          </li>
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="https://t.me/Mx_Kr">
              <img className="footer__contacts-link-image"
                   src={telegramLogo}
                   alt="telegram-logo"/>
            </a>
          </li>
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="mailto:maks.kryshnev@gmail.com">
              <img className="footer__contacts-link-image"
                   src={emailIcon}
                   alt="mail-logo"/>
            </a>
          </li>
        </ul>
  );
}
