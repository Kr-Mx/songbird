import React from "react";

export default class Description extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){let source = !!this.props.birdData ? this.props.birdData : this.props.birdsData[this.props.round][0];
  return (
    (this.props.birdData === null)? <p className='main__hint'>Listen to the recording and select the name of the group or artist whose song sounded</p>:
    <aside className='main__description'>
      <img className='main__description-photo' src={source.image} alt='bird-image'/>
      <span className='main__description-name'>{source.name}</span>
      <span className='main__description-species'>{source.species}</span>
      <audio className='main__description-audio' src={source.audio} controls></audio>
      <p className='main__description-about'>{source.description}</p>
    </aside>
  )
}}