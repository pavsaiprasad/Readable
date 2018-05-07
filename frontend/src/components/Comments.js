import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Comment from './Comment'

class Comments extends Component {
    render() {
        const postId = this.props.postId;
        const comments = this.props.comments &&
             this.props.comments.postId && 
             this.props.comments.postId[postId] 
             && this.props.comments.postId[postId].items ? 
             this.props.comments.postId[postId].items : [];
        return (
            <div className="container">
                <div className="col-md-12 col-md-offset-8 ">
                    {comments && comments.map((comment) =>
                        <Comment key={comment.id} comment={comment} postId={postId}/>
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
