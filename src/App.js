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
      <Container fluid="true" id="page">
        <Parallax
          bgImage={Background}
          strength={550}>
          <Element name="header"><Header /></Element>
        </Parallax>

        <Parallax
          bgImage={Parallax3}
          strength={550}>
          <Element name="about"><About /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="resume"><Resume /></Element>
        </Parallax>
        <Element name="contact"><Footer /></Element>
      </Container>

    </Router >
  );
}

export default App;