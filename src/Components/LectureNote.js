import React from "react";
import PropTypes from "prop-types";
import "../index.css";

function LectureNote() {
  return (
    <>
      <div className="App">
        <div className="mainBody">
          <h1>Waterloo Mechanical Engineering Lecture Notes</h1>
          <div style={{ width: "20rem" }}>
            <a
              href="https://douglashuang.notion.site/Winter-2023-2A-Term-351e21a05f3748bd9a52e77d1ad4a573"
              target="_blank"
              className="lectures-link"
            >
              <div style={{ borderStyle: "solid", padding: "1rem" }}>
                <h2 style={{ margin: "0" }}>2A Winter 2023</h2>
                <li>ME230 - Materials</li>
                <li>ME202 - Statistics</li>
                <li>ME201 - Advanced Calc</li>
                <li>ME269 - Electromechanical Devices</li>
                <li>ME219 - Mechanics of Deformable Solids</li>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LectureNote;
