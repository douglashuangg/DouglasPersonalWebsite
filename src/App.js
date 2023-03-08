import "./App.css";
import Projects from "./Components/Projects.js";
import Introduction from "./Components/Introduction.js";
import "./index.css";
import Footer from "./Components/Footer.js";
import Links from "./Components/Links.js";
import LectureNote from "./Components/LectureNote.js";
import Home from "./Components/Home.js";
import { useSpring, animated, config } from "react-spring";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 2000 },
  });

  return (
    <>
      <nav>
        {/* <Links /> */}
        <ul className="nav">
          <li className="header-spacing">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="header-spacing">
            <Link to="/lecturenotes" className="navbar-link">
              Lecture Notes
            </Link>
          </li>
          <li className="header-spacing">
            <Link
              to="https://www.linkedin.com/in/douglas-huang-b8b521209/"
              target="_blank"
              className="navbar-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </Link>
          </li>
          <li className="header-spacing">
            <Link
              to="https://github.com/douglashuangg"
              target="_blank"
              className="navbar-link"
            >
              <FontAwesomeIcon icon={faGithub} />{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecturenotes" element={<LectureNote />} />
      </Routes>
    </>
  );
}

export default App;
