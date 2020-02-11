import React from "react";
import email_icon from '../../asserts/images/email_icon.svg';
import github_logo from '../../asserts/images/github_logo.png';
import telegram_logo from '../../asserts/images/telegram_logo.png'

export default function FooterContacts (props) {
    return (
        <ul className='footer__contacts'>
          If you have any suggestion, please contact me:
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="https://github.com/Kr-Mx">
              <img className="footer__contacts-link-image"
                   src={github_logo}
                   alt="github-logo"/>
            </a>
          </li>
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="https://t.me/Mx_Kr">
              <img className="footer__contacts-link-image"
                   src={telegram_logo}
                   alt="telegram-logo"/>
            </a>
          </li>
          <li className="footer__contacts-link">
            <a className="footer__contacts-link-item" href="mailto:maks.kryshnev@gmail.com">
              <img className="footer__contacts-link-image"
                   src={email_icon}
                   alt="mail-logo"/>
            </a>
          </li>
        </ul>
    )
  }
