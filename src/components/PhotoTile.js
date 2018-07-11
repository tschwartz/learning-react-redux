import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { incrementLikes } from '../actions';

class PhotoTile extends Component {
    render() {
        const { post, i } = this.props;
        const { comments } = this.props.state;
        const commentCount = comments[post.code] ? comments[post.code].length : 0;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img
                            src={post.display_src}
                            alt={post.caption}
                            className="grid-photo"
                        />
                    </Link>
                    <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span
                            key={post.likes}
                            className="likes-heart"
                        >{post.likes}</span>
                    </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption }</p>
                    <div className="control-buttons">
                        <button
                            className="likes"
                            onClick={this.props.actions.incrementLikes.bind(null, i)}
                        >&hearts; {post.likes }</button>
                        <Link to={`/view/${post.code}`} className="button">
                            <span className="speech-bubble"></span> { commentCount }
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ incrementLikes }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoTile);
