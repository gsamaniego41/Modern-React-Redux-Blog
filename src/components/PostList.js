import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends Component {
  componentDidMount = props => {
    this.props.fetchPosts();
  };

  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => {
  // state is coming from combineReducers({}) // posts
  return {posts: state.posts}; // will return as props on PostList
  // every time our reducers run, mSTP will get called again
};

export default connect(
  mapStateToProps,
  {fetchPosts}
)(PostList);
