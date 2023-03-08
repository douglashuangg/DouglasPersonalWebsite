import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function Links() {
  return (
    <div>
      <a
        href="https://github.com/douglashuangg"
        target="_blank"
        className="icons"
        style={{ padding: "0 30px 0 10px" }}
      >
        <div className="link-buttons">
          <FontAwesomeIcon icon={faGithub} />{" "}
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/douglas-huang-b8b521209/"
        target="_blank"
        className="icons"
        style={{ padding: "0 30px 0 10px" }}
      >
        <div className="link-buttons">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </div>
      </a>
    </div>
  );
}

export default Links;
