import React, { Component } from "react";
import Fade from "react-reveal/Fade";
const axios = require("axios");
const url = "http://localhost:4000";
export default class QuizGameContainer extends Component {
  state = {
    username: "",
    points: 0,
    questions: [],
    answeredCorrectly: [],
    currentQuestion: 0,
    gameover: false
  };
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("What is the action?", action);
    };
  }
  handleClick = option => {
    this.state.questions.map(question => {
      if (question.correct_answer === option) {
        this.setState({ points: this.state.points + 10 });
      }
    });
    if (this.state.currentQuestion < 9) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    } else {
      this.setState({ gameover: true, currentQuestion: 0 });
    }
  };

  render() {
    const notLoading = this.state.questions.length !== 0;
    const currQ = this.state.currentQuestion;
    return (
      <div>
        {notLoading ? (
          <Fade>
            {this.state.gameover ? (
              "Waiting for other players"
            ) : (
              <div>
                <h2>{this.state.questions[currQ].question}</h2>
                {this.state.questions[currQ].options.map(option => {
                  return (
                    <div>
                      <br></br>
                      <button
                        name="option"
                        value={option}
                        onClick={() => {
                          this.handleClick(option);
                        }}
                      >
                        {option}
                      </button>
                      <br></br>
                    </div>
                  );
                })}
                <h3>Points: {this.state.points}</h3>
              </div>
            )}
          </Fade>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}
