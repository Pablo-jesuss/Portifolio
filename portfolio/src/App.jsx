import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

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
        <div id="certificates">
          <Certificates />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
