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
        I hold a <b>Bachelor's of Science in Information Systems</b> from
        <a href="https://www.gunadarma.ac.id/sejarah"> University of Gunadarma </a>, and currently serve as a Mobile Developer at {" "} 
        <a href="https://indoland-group.co.id/"> Indoland </a>. My professional expertise encompasses a range of technologies, including:
        {/* I just finished the React and React Native Bootcamp at{" "}
        <a href="https://www.btn.co.id/">Hacktiv8</a> as a{" "}
        <b>Frontend Developer</b>. */}
      </p>
    );
    const tech_stack = [
      "Flutter",
      "React",
      "Javascript ES6+",
      "PHP (Laravel)",
      "Git",
    ];
    const two = (
      <p>
        {/* I'm into <b>machine learning</b>, <b>human-computer interactions</b> and{" "}
        <b>Back End development</b>.  */}
        Beyond my professional endeavors, I actively engage in staying abreast of advancements in science. Additionally, I have a keen interest in video games, contributing to a well-rounded perspective.
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
