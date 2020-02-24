import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLobbies } from "../../actions/lobby";

import Fade from "react-reveal/Fade";
import GameRoom from "../GameRoom";
import { updatePoints } from "../../actions/game";
const uuidv4 = require("uuid/v4");
const url = "http://localhost:4000";

class QuizGameContainer extends Component {
  state = {
    username: "",
    lobbies: [],
    points: 0,
    pointsData: [],
    questions: [],
    answeredCorrectly: [],
    currentQuestion: 0,
    gameover: false,
    scoreboard: false,
    gameOn: true
  };
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      // console.log("What is the action?", action);
      const { type, payload } = action;

      if (type === "FETCH_QUESTIONS") {
        this.setState({ questions: payload.questions });
        this.lobbiesGlobal(payload.lobbies);
      }
      if (type === "POINTS") {
        console.log("THIS IS THE POINTS PAYLOAD", payload);
        this.setState({
          pointsData: payload,
          scoreboard: true
        });
      }
      // console.log(this.state.questions);
    };
  }

  lobbiesGlobal = array => {
    this.props.dispatch(fetchLobbies(array));
  };

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
      const points = this.state.points;
      const userId = this.props.user.currentUserId;
      const lobbyId = this.props.match.params.id;
      updatePoints(points, userId, lobbyId);
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
            {this.state.gameover && this.props.pointsData ? (
              <div>
                {this.state.pointsData.map(player => {
                  return (
                    <h2>
                      Player Name: {player.playerName} | Points:{" "}
                      {player.userResponse.points}
                    </h2>
                  );
                })}
              </div>
            ) : this.state.gameover ? (
              "Waiting for other players"
            ) : (
              <div>
                <h2>{this.state.questions[currQ].question}</h2>
                {this.state.questions[currQ].options.map(option => {
                  return (
                    <div key={uuidv4()}>
                      <br></br>
                      <button
                        key={uuidv4()}
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
            )
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
    lobbies: reduxState.lobby,
    user: reduxState.user
  };
}

export default connect(mapStateToProps)(QuizGameContainer, GameRoom);
