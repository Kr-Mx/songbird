import React from "react";
import unnamedBird from '../../asserts/images/unnamedBird.png';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class Question extends React.Component{
    constructor(props) {
        super(props);
    }
render(){
    const birdsData = this.props.birdsData;
    const Player = () => (
      <AudioPlayer
        className='main__question-audio'
        src={birdsData[this.props.round][this.props.answerIndex].audio}
        ref={c => (this.player = c)}
      />
    );
    return (
      <div className='main__question'>
          <img className='main__question-photo' src={this.props.birdImage?this.props.birdImage:unnamedBird} alt=''/>
          <span className='main__question-name'>{this.props.birdName?this.props.birdName:<span>&#10068;&#10068;&#10068;&#10068;&#10068;</span>}</span>
          <Player/>
      </div>
    )

}



};