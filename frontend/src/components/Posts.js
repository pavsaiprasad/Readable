import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import '../App.css';

class Posts extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="container">
                <div>
                    {posts && posts.items && posts.items.map((post) =>
                        <Post key={post.id} post={post}></Post>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);
