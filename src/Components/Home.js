import "../App.css";
import Projects from "./Projects.js";
import Introduction from "./Introduction.js";
import "../index.css";
import Footer from "./Footer.js";
import Links from "./Links.js";

function Home() {
  return (
    <div className="App">
      <div className="mainBody">
        <Introduction />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
