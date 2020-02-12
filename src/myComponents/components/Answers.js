import React from 'react';
import Description from './Description';
import Footer from './Footer';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistData: null,
      score: 5,
    };
  }

  checkArtist(artistData, e) {
    if (e.target.tagName !== 'LI') return null;
    this.setState({
      artistData: artistData,
    });
    if (e.target.firstChild.classList.length > 1 || this.props.isGuessed) {
      return null;
    }
    if (artistData.name === this.props.gameData[this.props.round][this.props.answerIndex].name) {
      e.target.firstChild.classList.add('guessed');
      this.props.setArtistData(artistData);
      this.props.increaseScore(this.state.score);
      this.props.guessAnswer();
      this.setState({
        score: 5,
      });
    } else {
      e.target.firstChild.classList.add('not-guessed');
      this.setState({
        score: this.state.score - 1,
      });
    }
  }

  changeRound() {
    if (!this.props.isGuessed) return;
    if (this.props.round === this.props.gameData.length - 1) {
      this.props.finishGame();
    }
    if (this.props.round < this.props.gameData.length - 1) {
      this.setState({
        birdData: null,
      });
      this.props.nextRound();
      this.props.guessAnswer();
      this.props.setArtistData();
      document.querySelectorAll('.main__answers-item').forEach((item) => {
        item.firstChild.classList.remove('guessed');
        item.firstChild.classList.remove('not-guessed');
      });
    }
  }

  render() {
    console.log('Грузится со стороннего ресурса надо подождать...');
    console.log(`Правильный вариант №${this.props.answerIndex+1}`);
    let answersList = this.props.gameData[this.props.round].map((artistData) => {
      return <li className='main__answers-item' key={artistData.id} onClick={this.checkArtist.bind(this, artistData)}>
          <div className='main__answers-item-signal'></div>
          {artistData.name}</li>;
    });
    return (
      <>
        <ul className='main__answers'>
          {answersList}
        </ul>
        <Description artistData={this.state.artistData}
                     gameData={this.props.gameData}
                     round={this.props.round}
        />
        <Footer nextRound={this.changeRound.bind(this)} isGuessed={this.props.isGuessed}/>
      </>
    )
  }
}