import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Comments from './Comments';
import * as action from '../actions/comments';
import * as CommentsAPI from '../services/comments-api';

class PostDetails extends Component {
    componentDidMount() {
        CommentsAPI.getComments(this.props.match.params.id).then((comments) => {
            this.props.getComments(this.props.match.params.id, comments)
        })
    }
    render() {
        const { posts, comments } = this.props;
        if (posts && posts.items && posts.items.length !== 0) {
            const post = posts.items.filter((p) => p.id === this.props.match.params.id)[0];
            return (
                <div>
                    <Post post={post} mode="view" />
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
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getComments: (postId, comments) => dispatch(action.getComments(postId, comments))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails); 