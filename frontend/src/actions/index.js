import * as CategoriesAPI from '../services/categories-api';
import * as PostsAPI from '../services/posts-api';

export const categoryList = categories => ({
  type: 'CATEGORY_LIST',
  categories
})

export const dispatchCategories = function () {
  return function (dispatch) {
    return CategoriesAPI.getCategories()
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        return dispatch(categoryList(data.categories))
      }
      )
  }
}

export const postsList = posts => ({
  type: 'POSTS_LIST',
  posts
})

export const dispatchPosts = function () {
  return function (dispatch) {
    return PostsAPI.getPosts()
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        return dispatch(postsList(data))
      }
      )
  }
}

export const addPost = function (post) {
  return function (dispatch) {
    PostsAPI.createPost(post)
      .then((res) => {
      });
    return {
      type: 'ADD_POST',
      post
    }
  }
}