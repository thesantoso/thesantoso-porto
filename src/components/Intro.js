import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div id="gazi-model">
          <GaziModel></GaziModel>
        </div>
        <Typist avgTypingDelay={200}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"rizky"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            {/* I'm a software engineer and artist based in Toronto. 
            I have great interest in full-stack development, artificial intelligence, 
            human-computer interactions, and everything in between. */}
            I'm a software quality assurance engineer based in Jakarta.
            As a QA Engineer, Quality is not an Act, it is a Habit. 
            Embrace the Pursuit of Excellence. highly self motivated and having a great enthusiasm towards Software Testing. 
            I enjoy researching and learning new Testing tools and techniques with a passion for career growth. 
           
          </div>
          <a
            href="mailto:rsantoso.me@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
