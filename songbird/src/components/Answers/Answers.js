import React from "react";
import Description from "../Description/Description";
import Footer from "../Footer/Footer";

export default class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdData: null,
      score: 5,
    };
  }

  checkBird(birdData, e) {
    if (e.target.tagName !== 'LI') return null;
    this.setState({
      birdData: birdData,
    });
    if (e.target.firstChild.classList.length > 1 || this.props.isGuessed) {
      return null
    }
    if (birdData.name === this.props.birdsData[this.props.round][this.props.answerIndex].name) {
      e.target.firstChild.classList.add('guessed');
      this.props.showBirdData(birdData);
      this.props.increaseScore(this.state.score);
      this.props.guessAnswer();
      this.setState({
        score: 5,
      });
    } else {
      e.target.firstChild.classList.add("not-guessed");
      this.setState({
        score: this.state.score - 1,
      });
    }
  }

  changeRound() {
    if (!this.props.isGuessed) return;
    if (this.props.round === this.props.birdsData.length-1) {
      this.props.finishGame()
    }
    if (this.props.round < this.props.birdsData.length-1) {
      this.setState({
        birdData: null,
      });
      this.props.nextRound();
      this.props.guessAnswer();
      this.props.showBirdData();
      document.querySelectorAll('.main__answers-item').forEach((item) => {
        item.firstChild.classList.remove("guessed");
        item.firstChild.classList.remove("not-guessed");
      });
    }
  }

  render() {
    const answersList = this.props.birdsData[this.props.round]
      .map(birdData => {
        return <li className='main__answers-item' key={birdData.id} onClick={this.checkBird.bind(this, birdData)}>
          <div className='main__answers-item-signal'></div>
          {birdData.name}</li>
      });
    return (
      <>
        <ul className='main__answers'>
          {answersList}
        </ul>
        <Description birdData={this.state.birdData}
                     birdsData={this.props.birdsData}
                     round={this.props.round}/>
        <Footer nextRound={this.changeRound.bind(this)} isGuessed={this.props.isGuessed}/>
      </>
    )
  }
}