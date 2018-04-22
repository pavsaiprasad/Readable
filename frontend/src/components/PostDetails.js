import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Comments from './Comments';
import * as commentsAction from '../actions/comments';

class PostDetails extends Component {
    componentDidMount() {
        this.props.dispatch(commentsAction.dispatchComments(this.props.match.params.id));
    }
    render() {
        const { posts, comments } = this.props;
        if (posts.length !== 0) {
            const post = posts.filter((p) => p.id === this.props.match.params.id)[0];
            return (
                <div>
                    <Post post={post} />
                    <Comments comments={comments} />
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer,
        comments: state.commentsReducer
    }
}

export default connect(mapStateToProps)(PostDetails); 