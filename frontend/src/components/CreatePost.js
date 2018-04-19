import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions'

class CreatePost extends Component {
    state = {
        author: null
    };
    onSubmit() {
        const uuid = require('uuid/v1');
        const post = {
            id: uuid(),
            timestamp: Date.now(),
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
            category: this.state.category,
            voteScore: 1,
            deleted: false,
            commentCount: 0
        }
        this.props.dispatch(action.addPost(post))
    }
    render() {

        const { posts, categories } = this.props

        return (
            <div class="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h2>Create a new Post</h2>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-8">
                            <input type="text" id="author" name="author" onChange={(e) => this.setState({ author: e.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-8">
                            <select id="category" name="category" onChange={(e) => this.setState({ category: e.target.value })}>
                                <option value="">Select a Category</option>
                                {categories.map((category) => (
                                    <option key={category.path} value={category.path} >{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-8">
                            <input type="text" id="title" name="title" onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Body</label>
                        <div class="col-sm-8">
                            <textarea id="body" name="body" placeholder="Write something.." onChange={(e) => this.setState({ body: e.target.value })}></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer,
        categories: state.categoriesReducer
    }
}

export default connect(mapStateToProps)(CreatePost)
