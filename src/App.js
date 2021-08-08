import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Parallax } from 'react-parallax';

// import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Background from "./assets/images/bkg.jpg";
import Sample from "./assets/images/sample.jpg";
import Parallax1 from "./assets/images/parallax1.jpg";
import Parallax2 from "./assets/images/parallax2.jpg";
import Parallax3 from "./assets/images/parallax3.jpg";

function App() {
  return (
    <Router>
      <>
        <NavTabs />

        <Parallax
          bgImage={Background}
          strength={550}>
          <Header />
        </Parallax>

        <Parallax
          bgImage={Parallax3}
          strength={550}>
          <About />
          <Projects />
          <Resume />
        </Parallax>

        <Footer />
      </>
    </Router >
  );
}

export default App;