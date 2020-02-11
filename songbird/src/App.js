import React from 'react';
import Header from './components/Header/Header'
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import unnamedBird from './asserts/images/unnamedBird.png';
import birdsData from "./birdsData";
import GameOver from "./components/GameOver/GameOver";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.birdsData = birdsData;
    this.answersLength = this.birdsData[0].length;
    this.state = {
      isFinish: false,
      birdImage: unnamedBird,
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
          birdImage: unnamedBird,
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
      birdImage: unnamedBird,
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

