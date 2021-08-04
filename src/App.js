import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Parallax } from 'react-parallax';

import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Background from "./assets/images/bkg.jpg";
import Sample from "./assets/images/sample.jpg";

function App() {
  return (
    <Router>
      <>

        <NavTabs />
        {/* <Route path="/" component={Header} /> */}
        <Parallax
          bgImage={Background}
          strength={500}
        >
          <Header />
        </Parallax>
        {/* <Container> */}
        <Parallax
          bgImage={Sample}
          strength={500}>
          <About />
        </Parallax>
        <Parallax
          bgImage={Sample}
          strength={500}>
          <Projects />
        </Parallax>
        <Parallax
          bgImage={Sample}
          strength={500}>
          <Resume />
        </Parallax>
        <Footer />
        {/* </Container> */}
      </>
    </Router>
  );
}

export default App;