import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import GameRoom from "../GameRoom";
const axios = require("axios");
const url = "http://localhost:4000";

class QuizGameContainer extends Component {
  state = {
    username: "",
    lobbies: [],
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
      // console.log("What is the action?", action);
      const { type, payload } = action;

      // const readyStatus = () => {
      //   if (type === "ALL_LOBBIES") {
      //     const readyStatus = payload.map(lobby => {
      //       return lobby.users.map(user => {
      //         if (user.ready) {
      //           return true;
      //         } else return false;
      //       });
      //     });
      //     return readyStatus;
      //   }
      // };
      // const booleanArray = readyStatus().flat();
      // const getQuestions = booleanArray.every(v => v === true);
      // if (getQuestions) {
      //   console.log("HOW MANY TIMES AM I BEING CALLED?");
      //   this.questions();
      // } else {
      //   return console.log("Didn't work");
      // }
    };
  }

  // async questions() {
  //   const questions = await axios.get(`${url}/questions`);
  //   // need to check type first
  //   this.setState({ questions: questions.data });
  //   // this.setState({questions: action})
  // }

  handleClick = option => {
    this.state.questions.map(question => {
      if (question.correct_answer === option) {
        this.setState({ points: this.state.points + 10 });
        return question;
      } else {
        return question;
      }
    });
    if (this.state.currentQuestion < 9) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    } else {
      this.setState({ gameover: !this.state.gameover, currentQuestion: 0 });
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

function mapStateToProps(reduxState) {
  // console.log("What is the redux state", reduxState);
  return {
    lobbies: reduxState.lobby
  };
}

export default connect(mapStateToProps)(QuizGameContainer, GameRoom);
