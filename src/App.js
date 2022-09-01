import './App.css';
import Projects from "./Components/Projects.js"; 
import Introduction from "./Components/Introduction.js"; 
import './index.css'
import Skills from "./Components/Skills.js"; 
import Footer from "./Components/Footer.js";
import Links from "./Components/Links.js";

function App() {
  return (
    <div className="App">
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
