import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post.js'
import * as PostSorter from '../utils/PostSorter';

class PostsByCategory extends Component {
    render() {
        const { posts, sortByList } = this.props;
        const category = this.props.match.params.category;
        const sortedPosts = PostSorter.sortPosts(posts, sortByList); 
        return (
            <div>
                {sortedPosts && sortedPosts.items && (sortedPosts.items.filter(post => post.category === category))
                    .map((post) => {
                        return <Post key={post.id} post={post}></Post>
                    })}
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

export default connect(
    mapStateToProps
)(PostsByCategory)
