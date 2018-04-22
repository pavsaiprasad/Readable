import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="display-inline">
                <div class="card panel-width">
                    <div class="card-body">
                        <Link to={`/${post.category}/${post.id}`}><strong>{post.title}</strong></Link>
                        <p class="card-text webkit-box">{post.body}</p>
                        <div className="comment-count">
                            <p>{post.commentCount} comments</p>
                            <p>Vote score: {post.voteScore}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
