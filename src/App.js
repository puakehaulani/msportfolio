import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Header from "./pages/Header";
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
          {/* <Route path="/" component={Header} /> */}
          <Header />
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