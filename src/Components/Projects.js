import "../App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import personalWebsiteArduino from "../assets/personalWebsiteArduino.png";

function Projects() {
  return (
    <div className="projects">
      <div class="work">
        <h2 className="title-headers">Work Experiences</h2>
        <ul>
          <h2 class="projectTitle">Software Developer @ Brock Solutions</h2>
          <p>Sep 2022 - Present</p>
          <h2 class="projectTitle">
            Junior Application Developer @ UWaterloo Centre for Extended
            Learning
          </h2>
          <li>Jan 2022 - Apr 2022</li>
        </ul>
      </div>
      <h2 className="title-headers">Projects</h2>
      <ul>
        <div className="project-box">
          <a
            href="https://github.com/douglashuangg/HackWestern9"
            target="_blank"
            className="icons"
          >
            <div style={{ color: "#c7c7c7" }}>
              <FontAwesomeIcon icon={faGithub} />{" "}
            </div>
          </a>
          <h2>HackWestern | MongoDB, Node, ReactJS</h2>
          <li>
            A journal that allows you to view your own and others progress
            towards a goal.
          </li>
        </div>
        <div className="project-box">
          <a
            href="https://github.com/douglashuangg/FBI"
            target="_blank"
            className="icons"
          >
            <div style={{ color: "#c7c7c7" }}>
              <FontAwesomeIcon icon={faGithub} />{" "}
            </div>
          </a>
          <h2>FBI (Facts 'Bout Ingredients) | Python/Flask, ReactJS</h2>
          <li>
            A hackathon project that generates facts about ingredients in a
            nutrition label!
          </li>
        </div>
        <img src={personalWebsiteArduino} className="arduino-image" />
        <div className="project-box">
          <a
            href="https://github.com/douglashuangg/RenewablePercentage"
            target="_blank"
            className="icons"
          >
            <div style={{ color: "#c7c7c7" }}>
              <FontAwesomeIcon icon={faGithub} />{" "}
            </div>
          </a>
          <h2>Renewable Percentage | Python</h2>
          <li>
            A twitter bot that tweets the percentage of energy generated
            renewably today compared to the same time last year in the USA.
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Projects;
