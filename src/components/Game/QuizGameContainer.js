import React, { Component } from "react";

export default class QuizGameContainer extends Component {
  state = {
    room: "",
    category: "0",
    difficulty: "any",
    questionCount: "5",
    error: "",
    background: ""
  };
  onRoomChange = e => {
    const room = e.target.value;
    this.setState({ room });
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState({ category });
  };

  onDifficultyChange = e => {
    const difficulty = e.target.value;
    this.setState({ difficulty });
  };

  onCountChange = e => {
    const questionCount = e.target.value;
    this.setState({ questionCount });
  };
  submitForm = e => {
    e.preventDefault();
    const config = {
      room: this.state.room,
      category: this.state.category,
      difficulty: this.state.difficulty,
      questionCount: this.state.questionCount
    };
    //console.log("submitting")
    socket.emit("createRoom", config, res => {
      //console.log("res!", res);
      if (res.code === "success") {
        this.setState({ error: "" });
        this.props.setRoom(this.state.room);
        this.props.history.push("/lobby");
      } else {
        this.setState({ error: res.msg });
      }
    });
  };
  render() {
    return <div></div>;
  }
}
