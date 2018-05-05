import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Comment from './Comment'

class Comments extends Component {
    render() {
        const { comments } = this.props
        return (
            <div className="container">
                <div className="col-md-12 col-md-offset-8 ">
                    {comments.items && comments.items.map((comment) =>
                        <Comment key={comment.id} comment={comment}/>
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
