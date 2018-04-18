import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {
    render() {
        const { comments, post } = this.props
        return (
            <div>
                <h3 className="post-comments-title">{comments.length} COMMENTS </h3>
                {comments.map((comment) =>
                    <div className="post-comment" key={comment.id}>
                        <div className="post-comment-author">
                            {comment.author}
                            <span className="post-comment-date">
                                {new Date(comment.timestamp).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="post-comment-vote">
                            {comment.voteScore}
                        </div>
                        <div className="post-comment-body">
                            {comment.body}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.commentsReducer
    }
}

export default connect(mapStateToProps)(Comments);
