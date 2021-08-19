import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";

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
      </Container>

      {/* <Footer /> */}
    </Router >
  );
}

export default App;