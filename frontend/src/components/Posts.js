import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Post from './Post'
import '../App.css';

class Posts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="display-grid">
                {posts.map((post) =>
                    <Post key={post.id} post={post}></Post>
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer
    }
}

export default connect(mapStateToProps)(Posts);
