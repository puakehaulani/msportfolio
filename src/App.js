import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import { Element } from 'react-scroll';


import Navigation from "./components/Nav";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Background from "./assets/images/bkg.jpg";
import Parallax3 from "./assets/images/parallax3.jpg";

function App() {
  return (
    <Router>
      <Navigation />
      <Container fluid="true">
        <Parallax
          bgImage={Background}
          strength={550}>
          <Element name="header" className="Element"><Header /></Element>
        </Parallax>

        <Parallax
          bgImage={Parallax3}
          strength={550}>
          <Element name="about" className="Element"><About /></Element>
          <Element name="projects" className="Element"><Projects /></Element>
          <Element name="resume" className="Element"><Resume /></Element>
        </Parallax>
        <Element name="contact"><Footer /></Element>
      </Container>
      <span className="attribute">created with &lt;3 by lexijack</span>
    </Router >
  );
}

export default App;