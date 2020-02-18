import React from "react";

const LoginForm = props => {
  // console.log(props);
  return (
    <div>
      {props.text}
      <form onSubmit={props.handleSubmit}>
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

export default LoginForm;
