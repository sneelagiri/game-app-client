import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { login } from "../../actions/users";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import LobbyFormContainer from "../Lobby/LobbyFormContainer";
class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    // console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    // console.log(this.props.currentUserId);
    this.props.dispatch(
      login(this.state.email, this.state.password, this.props.currentUserId)
    );
    this.setState({
      email: "",
      password: ""
    });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.userLoggedIn !== this.props.userLoggedIn) {
  //     setTimeout(() => this.props.history.push("/"), 1500);
  //   }
  // }

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <div>
            <h1>You are logged in</h1>
            <LobbyFormContainer />
          </div>
        ) : (
          <LoginForm
            text="Login"
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.token !== null,
    currentUserId: state.user
  };
};

export default connect(mapStateToProps)(LoginContainer);
