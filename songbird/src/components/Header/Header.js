import React from "react";

export default function Header(props) {
  const listItems = props.store.category.map((item,index) => {
    return <li className='header__status-element' key={item+index}>{item}</li>
  });

  return (
    <header className='header'>
      <h1 className='header__logo'>Song<span className='header__logo-right'>Bird</span></h1>
      <div className='header__score'>Счет:
        <span className='header__score-value'>
          {props.store.score}
        </span>
      </div>
      <ul className='header__status'>
        {listItems}
      </ul>
    </header>
  )
}