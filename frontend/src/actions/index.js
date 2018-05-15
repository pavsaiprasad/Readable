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

export function getPost(post) {
  return {
    type: 'GET_POST',
    post
  }
}

export function changeSortBy(selectedOption) {
  return {
    type: 'SORT_BY',
    selectedOption
  }
}