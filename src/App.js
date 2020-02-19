import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import LobbyContainer from "./components/Lobby/LobbyContainer";
import GameRoom from "./components/GameRoom";
import Home from "./components/Home";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/lobby">
                Game Lobby
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/lobby" component={LobbyContainer} />
            <Route exact path="/lobby/:id" component={GameRoom} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
