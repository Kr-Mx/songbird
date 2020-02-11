import React from "react";

export default function GameOver(props) {

return(
  (props.score !== props.maxScore)?
    <div className={props.isFinish?'message__congrats':'message__hide'}>
      <span className='message__congrats-title' >Поздравляем</span>
      <span className='message__congrats-text'>Вы набрали {props.score} баллов из {props.maxScore} возможных</span>
      <button className='message__congrats-button' onClick={props.restartGame}>Сыграть еще</button>
    </div>
    : <div className={!props.isFinish?'message__congrats':'message__hide'}>
      <span className='message__congrats-title' >Поздравляем</span>
      <span className='message__congrats-text'>Вы набрали максимальное количество баллов. Вы знаете о птицах всё.</span>
    </div>
 )
}