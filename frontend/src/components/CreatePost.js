import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreatePost extends Component {
    render() {
        const { posts, categories } = this.props
        return (
            <div class="container">
                <form>
                    <h2>Create a new Post</h2>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-8">
                            <input type="text" id="author" name="author" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-8">
                            <select id="category" name="category">
                                <option value="">Select a Category</option>
                                {categories.map((category) => (
                                    <option key={category.path} value={category.path}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-8">
                            <input type="text" id="title" name="title" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Body</label>
                        <div class="col-sm-8">
                            <textarea id="body" name="body" placeholder="Write something.."></textarea>
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
