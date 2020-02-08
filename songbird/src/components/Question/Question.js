import React from "react";
import unnamedBird from '../../asserts/images/unnamedBird.png';
export default function Question (){

    return (
      <div className='main__question'>
        <img className='main__question-photo' src={unnamedBird} alt=''/>
        <span className='main__question-name'>&#10068;&#10068;&#10068;&#10068;&#10068;</span>
        <audio className='main__question-audio' src='https://www.w3schools.com/html/horse.ogg' controls />
      </div>
    )


};