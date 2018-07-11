import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import PhotoTile from './PhotoTile';

class PhotoGrid extends Component {
  render() {
    return (
        <div>
          <Logo />
          <div className="photo-grid">
              {this.props.state.posts.map((post, index) => {
                return <PhotoTile
                  key={index}
                  i={index}
                  post={post}
                />
              })}
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
)(PhotoGrid);
