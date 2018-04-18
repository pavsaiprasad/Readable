import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreatePost extends Component {
    render() {
        const { posts, categories } = this.props
        return (
            <form>
                <h2>Create a new Post</h2>
                <div class="row">
                    <div class="col-25">
                        <label>Author</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="author" name="author" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Category</label>
                    </div>
                    <div class="col-75">
                        <select id="category" name="category">
                            <option value="">Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.path} value={category.path}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Title</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="title" name="title" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label>Body</label>
                    </div>
                    <div class="col-75">
                        <textarea id="body" name="body" placeholder="Write something.."></textarea>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
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
