import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LobbyForm = props => {
  // console.log(props);
  return (
    <Form className="lobbyForm" onSubmit={props.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Room Name:</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type="text"
          name="name"
          value={props.values.name}
          placeholder="E.g. Coolkids"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Room
      </Button>
    </Form>
  );
};

export default LobbyForm;
