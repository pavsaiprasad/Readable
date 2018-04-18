import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostDetails extends Component {
    render() {
        const { posts } = this.props;
        if (posts.length !== 0) {
            const post = posts.filter((p) => p.id === this.props.match.params.id)[0];
            return (
                <Post post={post} />
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
        posts: state.postsReducer
    }
}

export default connect(mapStateToProps)(PostDetails); 