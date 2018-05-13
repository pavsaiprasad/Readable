import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import CreateComment from './components/CreateComment';
import EditComment from './components/EditComment';
import EditPost from './components/EditPost';
import PostsByCategory from './components/PostsByCategory';
import './App.css';
import * as CategoriesAPI from './services/categories-api';
import * as PostsAPI from './services/posts-api';
import { connect } from 'react-redux'
import * as action from './actions'

class App extends Component {
  componentDidMount() {
    CategoriesAPI.getCategories().then((categories) => { this.props.getCategories(categories); });
    PostsAPI.getPosts().then((posts) => { this.props.getPosts(posts); });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path={'/:category'} component={PostsByCategory} />
            
            <Route exact path="/" component={Posts} />
            <Route exact path="/add" render={() => (
              <CreatePost />
            )} />
            <Route exact path="/:id/comment" render={() => (
              <CreateComment />
            )} />
            <Route exact path="/post/:id" render={() => (
              <EditPost/>
            )} />
            <Route exact path="/post/:postId/comment/:id" render={() => (
              <EditComment />
            )} />
            <Route exact path="/:category/:id" render={({ match }) => (
              <PostDetails match={match} />
            )} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: (categories) => dispatch(action.getCategories(categories)),
    getPosts: (posts) => dispatch(action.getPosts(posts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
