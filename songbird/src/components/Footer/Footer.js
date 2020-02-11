import React from "react";
import FooterContacts from "./FooterContacts";
export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <button className='footer__button' disabled={!this.props.isGuessed} onClick={this.props.nextRound}>Next question</button>
        <FooterContacts/>
      </footer>
    )
  }
}
