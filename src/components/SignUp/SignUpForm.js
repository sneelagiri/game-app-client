import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpForm.css";

const SignUpForm = props => {
  // console.log(props);
  return (
    <Form className="form" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="firstName"
          value={props.values.firstName}
        />
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="lastName"
          value={props.values.lastName}
        />
      </Form.Group>

      <Form.Group controlId="formPlayerName">
        <Form.Label>Player Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="playerName"
          value={props.values.playerName}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="password"
          name="password"
          value={props.values.password}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
