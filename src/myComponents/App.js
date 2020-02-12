import React from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import unnamedCd from '../asserts/images/unnamedCd.svg';
import gameData, { categoryArray } from '../asserts/data/gameData';
import GameOver from './components/GameOver';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.categoryArray = categoryArray;
    this.gameData = gameData;
    this.answersLength = this.gameData[0].length;
    this.state = {
      isFinish: false,
      isGuessed: false,
      artistImage: unnamedCd,
      artistName: '',
      round: 0,
      score: 0,
      maxScore: this.gameData.length * (this.gameData[0].length - 1),
      answerIndex: this.randomizeAnswer(this.answersLength),
    };
  }

  finishGame() {
    this.setState(
      { isFinish: true },
    );
  }

  guessAnswer() {
    this.setState(
      { isGuessed: !this.state.isGuessed },
    );
  }

  increaseScore(tryingNumber) {
    this.setState({ score: this.state.score + tryingNumber });
  }

  randomizeAnswer(length) {
    this.length = length;
    return Math.floor(Math.random() * (this.length));
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
    console.log('Грузится со стороннего ресурса надо подождать... Extra scope со звуком не делал)');
    console.log(`Правильный вариант №${this.state.answerIndex + 1}`);
    return (
      <>
        <Header score={this.state.score}
                round={this.state.round}
                categoryArray={ this.categoryArray}/>
        <main className="main" style={ { display: !this.state.isFinish ? 'grid' : 'none' } }>
          <Question gameData={this.gameData}
                    round={this.state.round}
                    answerIndex={this.state.answerIndex}
                    artistImage={this.state.artistImage}
                    artistName={this.state.artistName}
          />
          <Answers gameData={this.gameData}
                   finishGame={this.finishGame.bind(this)}
                   answerIndex={this.state.answerIndex}
                   setArtistData={this.setArtistData.bind(this)}
                   increaseScore={this.increaseScore.bind(this)}
                   round={this.state.round}
                   isGuessed={this.state.isGuessed}
                   guessAnswer={this.guessAnswer.bind(this)}
                   nextRound={this.nextRound.bind(this)}
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
