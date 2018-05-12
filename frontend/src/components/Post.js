import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as action from '../actions';
import { connect } from 'react-redux';
import * as PostsAPI from '../services/posts-api';
import { withRouter } from 'react-router-dom';

class Post extends Component {
    onDelete = (id) => {
        PostsAPI.deletePost(id).then((response) => {
            this.props.history.push('/'); 
            this.props.deletePost(id);
        })
    }
    upVote(id, option) {
        PostsAPI.votePost(id, option).then(post => {
            this.props.setPost(post);
        });
    }
    downVote(id, option) {
        PostsAPI.votePost(id, option).then(post => {
            this.props.setPost(post);
        });
    }  
   
    render() {
        const post = this.props.post;
        const {voteScore} = this.props.post;
        return (
            <div className="container">
                <div className="col-md-12 col-md-offset-8 ">
                    <div className="card">
                        <div className="card-body">
                            <Link to={`/${post.category}/${post.id}`}><strong>{post.title}</strong></Link>
                            <p className="card-text webkit-box">{post.body}</p>
                            <div className="display-flex">
                                <div>{post.commentCount} comments | Votes: {voteScore}
                                    <button className="btn" onClick={(e)=>this.upVote(post.id, 'upVote')}>
                                        <i className="fa fa-thumbs-up font-format"></i>
                                    </button>
                                    <button className="btn" onClick={(e)=>this.downVote(post.id, 'downVote')}>
                                        <i className="fa fa-thumbs-down font-format"></i>
                                    </button> |
                                    <button className="btn" onClick={(e) => this.onDelete(post.id)}>
                                        <i className="fa fa-trash font-format"></i>
                                    </button>
                                    {(this.props.mode === "view") && (
                                        <span> |  <Link to={`/${post.id}/comment`}>Add a comment</Link></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        deletePost: (post) =>  dispatch(action.deletePost(post)),
        setPost: (post) => dispatch(action.getPost(post))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Post));
