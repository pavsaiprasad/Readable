import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as action from '../actions';
import { connect } from 'react-redux';
import * as PostsAPI from '../services/posts-api';

class Post extends Component {
    onDelete = (id) => {
        PostsAPI.deletePost(id).then(() => {
            this.props.deletePost(id);
        })
    }
    render() {
        const post = this.props.post;
        return (
            <div className="display-inline">
                <div className="card panel-width">
                    <div className="card-header">
                        <div className="display-right">
                            <button onClick={(e) => this.onDelete(post.id)}>
                                <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link to={`/${post.category}/${post.id}`}><strong>{post.title}</strong></Link>
                        <p className="card-text webkit-box">{post.body}</p>
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

function mapDispatchToProps(dispatch) {
    return ({
        deletePost: (post) => { dispatch(action.deletePost(post)) }
    })
}

export default connect(null, mapDispatchToProps)(Post);
