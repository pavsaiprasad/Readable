import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/comments'
import * as CommentsAPI from '../services/comments-api'
import { withRouter } from 'react-router-dom'

class CreateComment extends Component {
    onSubmit = () => {
        const uuid = require('uuid/v1');
        const comment = {
            id: uuid(),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.match.params.id
        }
        CommentsAPI.addComment(comment).then((item) => {
            this.props.addComment(item);
            this.props.history.goBack();
        });
    }
    render() {
        const { posts, comments } = this.props;
        if (posts && posts.items && posts.items.length !== 0) {
            const post = posts.items.filter((p) => p.id === this.props.match.params.id)[0];
            return (
                <div className="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <h3 className="padded-h2">Add a new comment</h3>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Post</label>
                            <div className="col-sm-8">
                                <span>{post.title} by {post.author}</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input type="text" id="author" name="author" onChange={(e) => this.setState({ author: e.target.value })} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Comment</label>
                            <div className="col-sm-8">
                                <textarea id="body" name="body" placeholder="Write a comment.." onChange={(e) => this.setState({ body: e.target.value })}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-8">
                                <div class="btn-group">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-secondary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        };
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (comment) => dispatch(action.addComment(comment))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComment))
