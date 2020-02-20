import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import GameRoom from "../GameRoom";
const axios = require("axios");
const url = "http://localhost:4000";
class QuizGameContainer extends Component {
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
    this.questions();
  }

  async questions() {
    const lobbyId = this.props.match.params.id;
    let numPlayers = 0;
    this.props.lobbies.map(lobby => {
      if (lobby.id == lobbyId) {
        numPlayers = lobby.users.length;
        return null;
      } else {
        return null;
      }
    });
    const questions = await axios.post(`${url}/questions`, {
      lobbyId,
      numPlayers
    });
    console.log("What are the questions?", questions);
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

function mapStateToProps(reduxState) {
  console.log("What is the redux state", reduxState);
  return {
    lobbies: reduxState.lobby
  };
}

export default connect(mapStateToProps)(QuizGameContainer, GameRoom);
