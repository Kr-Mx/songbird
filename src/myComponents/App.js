import React from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import unnamedCd from '../asserts/images/unnamedCd.svg';
import gameData from '../asserts/data/gameData';
import GameOver from './components/GameOver';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.gameData = gameData;
    this.answersLength = this.gameData[0].length;
    this.state = {
      isFinish: false,
      artistImage: unnamedCd,
      artistName: '',
      round: 0,
      score: 0,
      isGuessed: false,
      answerIndex: this.randomizeAnswer(this.answersLength),
      maxScore: this.gameData.length * (this.gameData[0].length - 1),
    };
  }

  finishGame() {
    this.setState(
      { isFinish: true },
    );
  }

  randomizeAnswer(length) {
    this.length = length;
    return Math.floor(Math.random() * (this.length));
  }

  guessAnswer() {
    this.setState(
      { isGuessed: !this.state.isGuessed },
    );
  }

  increaseScore(tryingNumber) {
    this.setState({ score: this.state.score + tryingNumber });
  }

  setArtistData(artistData) {
    if (!artistData) {
      this.setState({
        artistImage: unnamedCd,
        artistName: '',
      });
    } else {
      this.setState({
        artistImage: artistData.image,
        artistName: artistData.name,
      });
    }
  }

  nextRound() {
    this.setState(
      {
        round: this.state.round + 1,
        answerIndex: this.randomizeAnswer(this.answersLength),
      },
    );
  }


  restartGame() {
    this.setState({
      isFinish: false,
      answerIndex: this.randomizeAnswer(this.answersLength),
      artistImage: unnamedCd,
      artistName: '',
      score: 0,
      round: 0,
      isGuessed: false,
    });
    this.setArtistData();
    document.querySelectorAll('.main__answers-item').forEach((item) => {
      item.firstChild.classList.remove('guessed');
      item.firstChild.classList.remove('not-guessed');
    });
  }

  render() {
    return (
      <>
        <Header score={this.state.score} round={this.state.round}/>
        <main className="main" style={{ display: !this.state.isFinish ? 'grid' : 'none' }}>
          <Question gameData={this.gameData}
                    answerIndex={this.state.answerIndex}
                    artistImage={this.state.artistImage}
                    artistName={this.state.artistName}
                    round={this.state.round}
          />
          <Answers gameData={this.gameData}
                   answerIndex={this.state.answerIndex}
                   setArtistData={this.setArtistData.bind(this)}
                   increaseScore={this.increaseScore.bind(this)}
                   round={this.state.round}
                   guessAnswer={this.guessAnswer.bind(this)}
                   isGuessed={this.state.isGuessed}
                   nextRound={this.nextRound.bind(this)}
                   finishGame={this.finishGame.bind(this)}
          />
        </main>
        <GameOver isFinish={this.state.isFinish}
                  score={this.state.score}
                  maxScore={this.state.maxScore}
                  restartGame={this.restartGame.bind(this)}/>
      </>
    );
  }
}
