import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import LobbyFormContainer from "./components/Lobby/LobbyFormContainer";
import GameRoom from "./components/GameRoom";
import Home from "./components/Home";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav.Item>
        </Nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/lobby" component={LobbyFormContainer} />
            <Route exact path="/lobby/:id" component={GameRoom} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
