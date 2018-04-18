import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetails extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer
    }
}

export default connect(mapStateToProps)(PostDetails); ß