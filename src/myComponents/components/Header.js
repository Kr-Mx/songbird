import React from 'react';

export default function Header(props) {
  const listItems = props.categoryArray.map(
    (item, index) => (
      (document.documentElement.clientWidth > 480)
        ? ((index === props.round) ? <li className='header__status-element active' key={index}>{item}</li>
          : <li className='header__status-element' key={index}>{item}</li>)
        : (index === props.round) ? <li className='header__status-element active' key={index}>{item}</li>
          : <li className='header__status-element' key={index}>...</li>),
  );
  return (
      <header className='header'>
        <h1 className='header__logo'>Song<span className='header__logo-right'>Bird</span></h1>
        <div className='header__score'>Score:
          <span className='header__score-value'>
          {props.score}
        </span>
        </div>
        <ul className='header__status'>
          {listItems}
        </ul>
      </header>
  );
}
