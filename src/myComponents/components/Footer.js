import React from 'react';
import FooterContacts from './FooterContacts';

export default function Footer(props) {
  return (
    <footer className='footer'>
      <button className='footer__button' disabled={!props.isGuessed} onClick={props.nextRound}>Next question
      </button>
      <FooterContacts/>
    </footer>
  );
}
