import React from 'react';

export default function Description(props) {
  const source = props.artistData ? props.artistData : props.gameData[props.round][0];
  return (
    (props.artistData === null)
      ? <p className='main__hint'>Listen to the recording and select the name of the group or artist whose song
        sounded</p>
      : <aside className='main__description'>
        <img className='main__description-photo' src={source.image} alt='bird'/>
        <span className='main__description-name'>{source.name}</span>
        <span className='main__description-species'>{source.species}</span>
        <audio className='main__description-audio' src={source.audio} controls/>
        <p className='main__description-about'>{source.description}</p>
      </aside>
  );
}
