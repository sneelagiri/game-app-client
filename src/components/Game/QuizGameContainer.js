import React, { Component } from "react";

export default class QuizGameContainer extends Component {
  render() {
    return (
      <div>
        <div id="header">Open Trivia!</div>
        <div class="divider"></div>
        <div id="content">
          <div id="config" class="modifiers">
            <form>
              Questions:
              <select id="noq" style="width:250px;">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </form>
            <form>
              Category:
              <select id="cat" style="width:250px;">
                <option value="">Any</option>
              </select>
            </form>

            <form>
              Difficulty:
              <select id="dif" style="width:250px;">
                <option value="">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </form>
          </div>
          <div id="start" class="option" onClick="setupGame()">
            Start
          </div>
          <div id="playArea">
            <div id="q"></div>
            <div id="answers"></div>
          </div>
        </div>
      </div>
    );
  }
}
