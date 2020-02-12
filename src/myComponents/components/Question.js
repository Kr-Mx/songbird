import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import unnamedCd from '../../asserts/images/unnamedCd.svg';
import 'react-h5-audio-player/lib/styles.css';

export default function Question(props) {
  const { gameData } = props;
  const Player = () => (
    <AudioPlayer
      className='main__question-audio'
      src={gameData[props.round][props.answerIndex].audio}
    />
  );
  return (
    <div className='main__question'>
      <img className='main__question-photo' src={props.artistImage ? props.artistImage : unnamedCd} alt=''/>
      <span className='main__question-name'>{props.artistName ? props.artistName
        : <span role="img" aria-label="question">&#10068;</span>}</span>
      <Player/>
    </div>
  );
}
