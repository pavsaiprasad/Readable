import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import '../App.css';
import * as PostSorter from '../utils/PostSorter';

class Posts extends Component {
    
    render() {
        const { posts, sortByList } = this.props;
        const sortedPosts = PostSorter.sortPosts(posts, sortByList); 
        
        return (
            <div className="container">
                <div>
                    {sortedPosts && sortedPosts.items && sortedPosts.items.map((post) =>
                        <Post key={post.id} post={post}></Post>
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        sortByList: state.sortByList
    }
}

export default connect(mapStateToProps)(Posts);
