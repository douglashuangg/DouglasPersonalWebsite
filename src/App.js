import './App.css';
import Projects from "./Components/Projects.js"; 
import Introduction from "./Components/Introduction.js"; 
import './index.css'
import Skills from "./Components/Skills.js"; 

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
