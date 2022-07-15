import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "E-Commerce San Komputer": {
        desc:
          "An application created for my Store, with a Laravel back-end and a Vue front-end.",
        techStack: "Laravel, Vue.js, Bootstrap, MySQL",
        link: "https://github.com/thesantoso/Laravel-Web-E-Commerse",
        open: "https://sankomputer.thesantoso.my.id/"
      },
      "YummyAmy FoodStore": {
        desc:
          "A food OnlineStore created for Bussiness my friend. Built with PHP Native and Boostrap",
        techStack: "PHP, Javascript, Bootstrap, MySQL",
        link: "https://github.com/thesantoso",
        open: "https://yummyamy.thesantoso.my.id"
      },
      "Clone Tetris C++": {
        desc:
          "Build a clone TETRIS game with visual c++. No Open GL No DirectX",
        techStack: "C++",
        link: "https://github.com/thesantoso/CloneTetris",
        open: ""
      },
      "Distro IDN": {
        desc:
          "An application created for Fashion Store my Friend, with a Laravel and Bootstrap.",
        techStack: "Laravel, Vue.js, Bootstrap, MySQL",
        link: "https://github.com/thesantoso/Laravel-Distro",
        open: ""
      },
      "D3 Petshop": {
        desc:
          "Gunadarma University Junior Web Programmer LSP Exam Case Study in 2022.",
        techStack: "Laravel, Javascript, Bootstrap, MySQL",
        link: "https://github.com/thesantoso/D3petshop",
        open: ""
      },
      "Hotel APP": {
        desc:
          "Hotel App that helps you find nearby hotels and make reservations.",
        techStack: "React Native, Javascript, Hotel API",
        link: "https://github.com/thesantoso/hotelApp-with-react",
        open: ""
      },
      // "Game Centre": {
      //   desc:
      //     "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //   techStack: "Java, Android Studio",
      //   link: "https://github.com/gazijarin/gamecentre",
      //   open: ""
      // },
      // "Minimax Stonehenge": {
      //   desc:
      //     "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      //   techStack: "Python",
      //   link: "https://github.com/gazijarin/stonehenge",
      //   open: ""
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
