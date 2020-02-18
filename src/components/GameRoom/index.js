import React from "react";
import { connect } from "react-redux";

class GameRoom extends React.Component {
  componentDidMount() {
    console.log("Stage 1", this.props.match.params);
    const roomName = this.props.match.params.name;
    // console.log("Now let's fetch this post:", post_id);
    // this.props.dispatch(fetchPost(post_id));
  }
  render() {
    const loading = !this.props.posts;
    return (
      <div>
        <h1>Game Room</h1>
        {loading ? <p>Loading...</p> : <div>Hello</div>}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    data: reduxState
  };
}
export default connect(mapStateToProps)(GameRoom);
