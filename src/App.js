import "./App.css";
import Projects from "./Components/Projects.js";
import Introduction from "./Components/Introduction.js";
import "./index.css";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";
import Links from "./Components/Links.js";
import { useSpring, animated, config } from "react-spring";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 2000 },
  });

  return (
    <div style={props} className="App">
      <Links />
      <div className="mainBody">
        <Introduction />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
