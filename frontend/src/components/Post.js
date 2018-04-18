import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        return (
            <div key={this.props.post.id} className="panel panel-default">
                <p ><strong>{this.props.post.title}</strong></p>
                <p>Written by {this.props.post.author} on {new Date(this.props.post.timestamp).toLocaleDateString()}</p>
                <p className="post-body">{this.props.post.body}</p>
                <div className="comment-count">
                    <p>{this.props.post.commentCount} comments</p>
                    <p>Vote score: {this.props.post.voteScore}</p>
                </div>
            </div>
        );
    }
}

export default Post;
