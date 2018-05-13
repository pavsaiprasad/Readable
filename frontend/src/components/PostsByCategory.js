import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post.js'

class PostsByCategory extends Component {
    render() {
        const { posts } = this.props;
        const category = this.props.match.params.category;
        return (
            <div>
                {posts && posts.items && (posts.items.filter(post => post.category === category))
                    .map((post) => {
                        return <Post key={post.id} post={post}></Post>
                    })}
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts
    }
}

export default connect(
    mapStateToProps
)(PostsByCategory)
