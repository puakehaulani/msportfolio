import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
        <Container>
          <NavTabs />
          {/* <Route exact path="/portfolio-react/" component={Home} />
          <Route exact path="/portfolio-react/about" component={About} />
          <Route exact path="/portfolio-react/projects" component={Projects} />
          <Route path="/portfolio-react/resume" component={Resume} /> */}
          <Footer />
        </Container>
      </>
    </Router>
  );
}

export default App;