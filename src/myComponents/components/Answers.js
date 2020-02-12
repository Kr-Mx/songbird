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
    if (e.target.tagName !== 'LI' || e.target.firstChild.classList.length > 1 || this.props.isGuessed) { return null; }
    this.setState({
      artistData: artistData,
    });
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
    if (!this.props.isGuessed) { return null; }
    if (this.props.round === this.props.gameData.length - 1) {
      this.props.finishGame();
      this.setState({
        artistData: null,
      });
    }
    if (this.props.round < this.props.gameData.length - 1) {
      this.setState({
        artistData: null,
      });
      this.props.nextRound();
      this.props.setArtistData();
      this.props.guessAnswer();
      document.querySelectorAll('.main__answers-item').forEach((item) => {
        item.firstChild.classList.remove('guessed');
        item.firstChild.classList.remove('not-guessed');
      });
    }
  }

  render() {
    this.answersList = this.props.gameData[this.props.round].map((artistData) => {
      return (
        <li className='main__answers-item' key={artistData.id} onClick={this.checkArtist.bind(this, artistData)}>
          <div className='main__answers-item-signal'> </div>
          {artistData.name}
        </li>);
    });
    return (
      <>
        <ul className='main__answers'>
          {this.answersList}
        </ul>
        <Description gameData={this.props.gameData}
                     artistData={this.state.artistData}
                     round={this.props.round}
        />
        <Footer nextRound={this.changeRound.bind(this)}
                isGuessed={this.props.isGuessed}/>
      </>
    );
  }
}