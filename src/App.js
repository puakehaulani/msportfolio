import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
        <Container>
          <NavTabs />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} /> */}
          <Home />
          <About />
          <Projects />
          <Resume />
          <Footer />
        </Container>
      </>
    </Router>
  );
}

export default App;