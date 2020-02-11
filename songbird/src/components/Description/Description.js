import React from "react";
import AudioPlayer from "react-h5-audio-player";

export default class Description extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){let source = !!this.props.birdData ? this.props.birdData : this.props.birdsData[this.props.round][0];
  const Player = () => (
    <AudioPlayer
      className='main__description-audio'
      src={source.audio}
      ref={c => (this.player = c)}
    />);
  return (
    <aside className='main__description'>
      <img className='main__description-photo' src={source.image} alt='bird-image'/>
      <span className='main__description-name'>{source.name}</span>
      <Player/>
      <p className='main__description-about'>{source.description}</p>
    </aside>
  )
}}