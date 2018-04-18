import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        const post = this.props.post;
        return (
            <div key={post.id} className="panel panel-default">
                <Link to={`/${post.category}/${post.id}`}><strong>{post.title}</strong></Link>
                <p>Written by {post.author} on {new Date(post.timestamp).toLocaleDateString()}</p>
                <p className="post-body">{post.body}</p>
                <div className="comment-count">
                    <p>{post.commentCount} comments</p>
                    <p>Vote score: {post.voteScore}</p>
                </div>
            </div>
        );
    }
}

export default Post;
