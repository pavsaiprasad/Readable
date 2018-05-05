import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Comments extends Component {
    render() {
        const { comments } = this.props
        return (
            <div className="container">
                <div className="col-md-12 col-md-offset-8 ">
                    {comments.items && comments.items.map((comment) =>
                        <div class="card" key={comment.id}>
                            <div className="card-header">
                                <div className="display-left">{comment.author} on {new Date(comment.timestamp).toLocaleDateString()}</div>
                                <div className="display-right">
                                    <a className="btn">
                                        <i className="fa fa-thumbs-up thumbs-up"></i>
                                    </a>
                                    <a className="btn">
                                        <i className="fa fa-thumbs-down thumbs-up"></i>
                                    </a>
                                    {comment.voteScore}
                                </div>
                            </div>
                            <div class="card-body">
                                <div className="webkit-box">
                                    {comment.body}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comments);
