import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions'
import * as PostsAPI from '../services/posts-api';
import { withRouter } from 'react-router-dom'

class EditPost extends Component {
    state = {
    author: '',
    body: '',
    category: '',
    title: '',
    error: ''
    };
    componentDidMount() {
        const posts = this.props.posts;
        if (posts && posts.items && posts.items.length !== 0) {
            const post = posts.items.filter((p) => p.id === this.props.match.params.id)[0];
            this.setState({
                author: post.author,
                body: post.body,
                category: post.category,
                title: post.title
            });
        } 
    }
    updatePost = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.body || !this.state.category) {
            this.setState({
                error: 'Please enter all the required fields'
            })
            return false;
        }
        const post = {
            id: this.props.match.params.id,
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
            category: this.state.category,
        }
        PostsAPI.editPost(post).then((item) => {
            this.props.editPost(item);
            this.props.history.push('/');
        });
    }
    render() {
        const { categories, posts } = this.props
        if (posts && posts.items && posts.items.length !== 0) {
        const post = posts.items.filter((p) => p.id === this.props.match.params.id)[0];
        return (
            <div className="container">
                <form onSubmit={this.updatePost}>
                    <h3>Edit Post</h3>
                    {(this.state.error) &&
                        (<div class="alert alert-danger" role="alert">
                            <p>{this.state.error}</p>
                        </div>
                        )}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-8">
                            <input type="text" id="author" name="author" onChange={(e) => this.setState({ author: e.target.value })} value={this.state.author}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-8">
                            <select id="category" name="category" onChange={(e) => this.setState({ category: e.target.value })} value={this.state.category}>
                                <option value="">Select a Category</option>
                                {categories && categories.items && categories.items.map((category) => (
                                    <option key={category.path} value={category.path} >{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-8">
                            <input type="text" id="title" name="title" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-8">
                            <textarea id="body" name="body" placeholder="Write something.." onChange={(e) => this.setState({ body: e.target.value })}>{post.body}</textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-sm-4 col-sm-8">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
        } else {
            return (
                <div></div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editPost: (post) => dispatch(action.getPost(post))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost))
