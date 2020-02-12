import React from 'react';
import Header from './components/Header'
import Question from "./components/Question";
import Answers from "./components/Answers";
import unnamedCd from '../asserts/images/unnamedCd.svg';
import gameData from "../asserts/data/gameData";
import GameOver from "./components/GameOver";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.birdsData = gameData;
    this.answersLength = this.birdsData[0].length;
    this.state = {
      isFinish: false,
      birdImage: unnamedCd,
      birdName: '',
      round: 0,
      score: 0,
      isGuessed: false,
      answerIndex: this.randomizeAnswer(this.answersLength),
      maxScore: this.birdsData.length*(this.birdsData[0].length-1)
    };
  }
  finishGame() {
    this.setState(
      {isFinish: true}
    )
  }
  randomizeAnswer(length) {
    return Math.floor(Math.random() * (length))
  }
  guessAnswer() {
    this.setState(
      {isGuessed: !this.state.isGuessed}
    )
  }
  increaseScore(tryingNumber) {
    this.setState({score: this.state.score + tryingNumber})
  };

  showBirdData(birdData) {
    if (!birdData) {
      this.setState({
          birdImage: unnamedCd,
          birdName: '',
        },
      );
    } else {
      this.setState({
          birdImage: birdData.image,
          birdName: birdData.name,
        },
      );
    }
  };

  nextRound() {
    this.setState(
      {
        round: this.state.round + 1,
        answerIndex: this.randomizeAnswer(this.answersLength)
      })
  }





  restartGame() {
    this.setState({
      isFinish: false,
      answerIndex: this.randomizeAnswer(this.answersLength),
      birdImage: unnamedCd,
      birdName: '',
      score: 0,
      round: 0,
      isGuessed: false,
    });
    this.showBirdData();
    document.querySelectorAll('.main__answers-item').forEach((item) => {
      item.firstChild.classList.remove("guessed");
      item.firstChild.classList.remove("not-guessed");
    });
  }

  render() {
    return (
      <>
        <Header score={this.state.score} round={this.state.round}/>
        <main className="main" style={{display: !this.state.isFinish ? 'grid' : 'none'}}>
          <Question birdsData={this.birdsData}
                    answerIndex={this.state.answerIndex}
                    birdImage={this.state.birdImage}
                    birdName={this.state.birdName}
                    round={this.state.round}
          />
          <Answers birdsData={this.birdsData}
                   answerIndex={this.state.answerIndex}
                   showBirdData={this.showBirdData.bind(this)}
                   increaseScore={this.increaseScore.bind(this)}
                   round={this.state.round}
                   guessAnswer={this.guessAnswer.bind(this)}
                   isGuessed={this.state.isGuessed}
                   nextRound={this.nextRound.bind(this)}
                   finishGame={this.finishGame.bind(this)}
          />
        </main>
        <GameOver isFinish={this.state.isFinish }
                  score={this.state.score}
                  maxScore={this.state.maxScore}
        restartGame={this.restartGame.bind(this)}/>
      </>
    )
  }
}

