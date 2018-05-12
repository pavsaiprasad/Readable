import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as CommentsAPI from '../services/comments-api';
import * as action from '../actions/comments'

class Comment extends Component {
    onDelete = (id, postId) => {
        CommentsAPI.deleteComment(id).then(() => {
            this.props.deleteComment(id, postId);
        })
    }
    upVote(id, option) {
        CommentsAPI.voteComment(id, option).then(comment => {
            this.props.setComment(comment);
        });
    }
    downVote(id, option) {
        CommentsAPI.voteComment(id, option).then(comment => {
            this.props.setComment(comment);
        });
    }
    render() {
        const { comment, postId } = this.props
        return (
            <div className="card" key={comment.id}>
                <div className="card-header">
                    <div className="display-left">{comment.author} on {new Date(comment.timestamp).toLocaleDateString()}</div>
                    <div className="display-right">
                        <button className="btn" onClick={(e) => this.upVote(comment.id, 'upVote')}>
                            <i className="fa fa-thumbs-up font-format"></i>
                        </button>
                        <button className="btn" onClick={(e) => this.downVote(comment.id, 'downVote')}>
                            <i className="fa fa-thumbs-down font-format"></i>
                        </button>
                        {comment.voteScore} |
                        <button className="btn" onClick={(e) => this.onDelete(comment.id, postId)}>
                            <i className="fa fa-trash font-format"></i>
                        </button>
                        <Link to={`/post/${postId}/comment/${comment.id}`}>
                            <i className="fa fa-pencil font-format"></i>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="webkit-box">
                        {comment.body}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setComment: (comment) => dispatch(action.getComment(comment)),
        deleteComment: (comment, postId) => dispatch(action.deleteComment(comment, postId))
    }
}

export default connect(null, mapDispatchToProps)(Comment);