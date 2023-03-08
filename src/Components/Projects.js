import "../App.css";
import "../index.css";
import React from "react";
import personalWebsiteArduino from "../assets/personalWebsiteArduino.png";

function Projects() {
  return (
    <div className="projects">
      <div class="work">
        <h2 className="title-headers">Work Experiences</h2>
        <ul>
          <h2>Software Developer @ Brock Solutions</h2>
          <h2>
            Junior Application Developer @ UWaterloo Centre for Extended
            Learning
          </h2>
        </ul>
      </div>
      <h2 className="title-headers">Projects</h2>
      <ul>
        <li style={{ listStyle: "circle" }}>
          <a
            href="https://github.com/douglashuangg/Comicfy.ai"
            target="_blank"
            className="project-link"
          >
            Comicfy.ai
          </a>{" "}
          is a hackathon project that creates a comic based on any story using
          an image generation AI!
        </li>
        <li style={{ listStyle: "circle" }}>
          <a
            href="https://github.com/douglashuangg/FBI"
            target="_blank"
            className="project-link"
          >
            FBI (Facts 'Bout Ingredients)
          </a>{" "}
          is a hackathon project that generates a description of all the
          ingredients in an ingredient label!
        </li>
        {/* <img src={personalWebsiteArduino} className="arduino-image" /> */}
        <li style={{ listStyle: "circle" }}>
          <a
            href="https://github.com/douglashuangg/RenewablePercentage"
            target="_blank"
            className="project-link"
          >
            Renewable Percentage
          </a>{" "}
          is a twitter bot that tweets the percentage of energy generated
          renewably today compared to the same time last year in the USA.
        </li>
      </ul>
    </div>
  );
}

export default Projects;
