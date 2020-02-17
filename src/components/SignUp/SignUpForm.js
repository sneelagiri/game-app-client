import React, { Component } from "react";

const SignUpForm = props => {
  // console.log(props);
  return (
    <div>
      {props.text}
      <form onSubmit={props.handleSubmit}>
        <label>
          First Name:
          <input
            onChange={props.handleChange}
            type="text"
            name="firstName"
            value={props.values.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={props.handleChange}
            type="text"
            name="lastName"
            value={props.values.lastName}
          />
        </label>
        <label>
          Player Name:
          <input
            onChange={props.handleChange}
            type="text"
            name="playerName"
            value={props.values.playerName}
          />
        </label>
        <label>
          Email:
          <input
            onChange={props.handleChange}
            type="email"
            name="email"
            value={props.values.email}
          />
        </label>
        <label>
          Password:
          <input
            onChange={props.handleChange}
            type="text"
            name="password"
            value={props.values.password}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignUpForm;
