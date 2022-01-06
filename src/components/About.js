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
        I am currently studying <b>Computer Science</b> at{" "}
        <b> Gunadarma University </b>, with a focus in Web Development.
        Last year, I was on a one-year internship at{" "}
        <a href="https://www.btn.co.id/">Skilvul</a> as a{" "}
        <b>UI/UX Designer</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>machine learning</b>, <b>human-computer interactions</b> and{" "}
        <b>Back End development</b>. In my free time, I drink coffee and play video games just for fun.
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
    const desc_items = [one, two];

    const tech_stack = [
      "Backend Web Development",
      "Frontend Web Development",
      "UI/UX Design",
      "API Development",
      "Problem-Solving",
      "Fast Learning"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/san.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
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
