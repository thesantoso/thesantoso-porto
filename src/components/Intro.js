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
            Hi! I am Rizky Dwi Santoso, a web developer focused on crafting web. 
            Designing and Coding have been my passion since the days I started study 
            with computers but I found myself into web development since 2016. I enjoy 
            creating beautifully designed, intuitive and functional websites.
            {/* I'm a software engineer based in Bekasi, West Java, ID. I have profound
            interest in machine learning, human-computer interactions, frontend
            development, and everything in between. */}
          </div>
          <a
            href="mailto:rsantoso.me@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hello"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
