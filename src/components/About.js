import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am a graduate of
        <a href="https://www.gunadarma.ac.id/sejarah"> University of Gunadarma </a>, with a <b>Bachelor's of Science</b> in <b>Information Systems</b>, 
        Currently, I am Internship as a <b>Software QA Engineer</b> at {" "} 
        <a href="https://sagaratechnology.com/"> Sagara Technology </a>
        {/* I just finished the React and React Native Bootcamp at{" "}
        <a href="https://www.btn.co.id/">Hacktiv8</a> as a{" "}
        <b>Frontend Developer</b>. */}
      </p>
    );
    const tech_stack = [
      "Javascript ES6+",
      "React.js",
      "PHP (Laravel)",
      "Git",
      "HTML & CSS"
    ];
    const two = (
      <p>
        {/* I'm into <b>machine learning</b>, <b>human-computer interactions</b> and{" "}
        <b>Back End development</b>.  */}
        Outside of work, I'm interested in following the developments of science. I also play a lot of video games
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:rsantoso.me@gmail.com">
          rsantoso.me@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one];
    const desc_outside= [two];


    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/casual.png");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items }
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {desc_outside }
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
