import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';


function App() {

  return (
    <Router>
      <Container fluid="true">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Logout} />
      </Container>
      <span className="attribute">created with &lt;3 by lexijack</span>
    </Router >
  );
}

export default App;