import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {
    render() {
        const { comments, post } = this.props
        return (
            <div className="display-inline">
                {comments.map((comment) =>
                    <div class="card panel-width" key={comment.id}>
                        <div className="card-header">
                            <div className="display-left">{comment.author} on {new Date(comment.timestamp).toLocaleDateString()}</div>
                            <div className="display-right">{comment.voteScore}</div>
                        </div>
                        <div class="card-body">
                            <div className="webkit-box">
                                {comment.body}
                            </div>
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
