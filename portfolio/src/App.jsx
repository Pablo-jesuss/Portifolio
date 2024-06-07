import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>
        <div id="certificates">
          <Certificates />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
      </main>
    </div>
  );
}

export default App;
