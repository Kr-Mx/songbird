import React from 'react';

export default function GameOver(props) {
  return (
    (props.score !== props.maxScore)
      ? <div className={props.isFinish ? 'message__congrats' : 'message__hide'}>
        <span className='message__congrats-title'>Congratulations!</span>
        <span className='message__congrats-text'>You scored {props.score} points out of {props.maxScore} possible</span>
        <button className='message__congrats-button' onClick={props.restartGame}>Play again</button>
      </div>
      : <div className={props.isFinish ? 'message__congrats' : 'message__hide'}>
        <span className='message__congrats-title'>Congratulations!</span>
        <img className='message__congrats-reward'
             src='https://i.gifer.com/origin/d4/d4ca1efd5ed6cd800357004bcff4a7dd_w200.gif' alt='salute'/>
        <span
          className='message__congrats-text'>You scored the maximum number of points. You know everything about music.</span>
      </div>
  );
}
