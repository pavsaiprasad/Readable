import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/comments'
import * as CommentsAPI from '../services/comments-api'
import { withRouter } from 'react-router-dom'

class EditComment extends Component {
    state = {
        error: ''
    }
    updateComment = (e) => {
        e.preventDefault();
        if (!this.state.body) {
            this.setState({
                error: 'Please enter all the required fields'
            })
            return false;
        }
        const comment = {
            id: this.props.match.params.id,
            timestamp: Date.now(),
            body: this.state.body
        }
        
        CommentsAPI.editComment(comment).then((item) => {
            this.props.setComment(item);
            this.props.history.goBack();
        });
    }
    render() {
        const postId = this.props.match.params.postId;
        const commentId = this.props.match.params.id;
        const comments = this.props.comments &&
            this.props.comments.postId &&
            this.props.comments.postId[postId]
            && this.props.comments.postId[postId].items ?
            this.props.comments.postId[postId].items : [];
        if (comments  && comments.length !== 0) {
            const comment = comments.filter((p) => p.id === commentId)[0];
            return (
                <div className="container">
                    <form onSubmit={this.updateComment}>
                        <h3 className="padded-h2">Edit Comment</h3>
                        {(this.state.error) &&
                            (<div class="alert alert-danger" role="alert">
                                <p>{this.state.error}</p>
                            </div>
                            )}
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Comment</label>
                            <div className="col-sm-8">
                                <textarea id="body" name="body" placeholder="Write a comment.." onChange={(e) => this.setState({ body: e.target.value })}>{comment.body}</textarea>
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
            
            )} else{
        return (
            <div></div>
        )}
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setComment: (comment) => dispatch(action.getComment(comment))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditComment))
