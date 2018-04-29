export function getCategories(categories) {
  return {
    type: 'CATEGORY_LIST',
    categories
  }
}

export function getPosts(posts) {
  return {
    type: 'POSTS_LIST',
    posts
  }
}

export const addPost = function (post) {
  return {
    type: 'ADD_POST',
    post
  }
}

export const deletePost = function (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}