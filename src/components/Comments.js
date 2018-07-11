import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addComment, removeComment } from '../actions';

class Comments extends Component {
    renderComment(comment, i) {
        const { postId } = this.props.match.params;

        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.actions.removeComment.bind(null, postId, i)} >&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(event) {
        event.preventDefault();

        const { postId } = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.actions.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comments">
                { this.props.comments.map(this.renderComment.bind(this)) }
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addComment, removeComment }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments));
