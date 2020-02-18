import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignUpContainer from "./components/SignUp/SignUpContainer";
import LoginContainer from "./components/Login/LoginContainer";
import LobbyFormContainer from "./components/Lobby/LobbyFormContainer";
import GameRoom from "./components/GameRoom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/signup">
              <li>Sign up!</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </nav>
          <Switch>
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
