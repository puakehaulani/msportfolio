import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Notfound from "./pages/NotFound";
import UserProvider from "./providers/UserProvider";

function App() {

  return (
    <UserProvider>
      <Router>
        <Container fluid="true">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path='/logout' component={Logout} />
            <Route>
              <Notfound />
            </Route>
          </Switch>
        </Container>
        <span className="attribute">created with &lt;3 by lexijack</span>
      </Router >
    </UserProvider>
  );
}

export default App;