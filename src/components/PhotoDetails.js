import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import PhotoTile from './PhotoTile';
import Comments from './Comments';

class PhotoDetails extends Component {
  render() {
    const { postId } = this.props.match.params;
    const i = this.props.state.posts.findIndex(post => post.code === postId);
    const post = this.props.state.posts[i];
    const comments = this.props.state.comments[postId] || [];

    return (
        <div>
          <Logo />
          <div className="single-photo">
              <PhotoTile
                i={i}
                post={post}
              ></PhotoTile>
              <Comments comments={comments}></Comments>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  null
)(PhotoDetails);
