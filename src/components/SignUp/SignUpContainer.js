import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/users";

class SignupFormContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    playerName: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      signUp(
        this.state.firstName,
        this.state.lastName,
        this.state.playerName,
        this.state.email,
        this.state.password
      )
    );
    this.setState({
      firstName: "",
      lastName: "",
      playerName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.userCreated ? <h1>Account created</h1> : null}
        <SignUpForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("testing git");
  // console.log("STATE IN MSTP", state);
  return {
    userCreated: state.user.userCreated
  };
};

export default connect(mapStateToProps)(SignupFormContainer);
