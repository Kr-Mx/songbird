import React from "react";

export default function Header (props) {
  const categoryArray = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  const listItems = categoryArray.map((item, index) => {
   return (index === props.round)?<li className='header__status-element active' key={index}>{item}</li>:
      <li className='header__status-element' key={index}>{item}</li>
     });

    return (
      <header className='header'>
        <h1 className='header__logo'>Song<span className='header__logo-right'>Bird</span></h1>
        <div className='header__score'>Счет:
          <span className='header__score-value'>
          {props.score}
        </span>
        </div>
        <ul className='header__status'>
          {listItems}
        </ul>
      </header>
    )

}
