const api = 'http://localhost:3001'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token'
}

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const createPost = (data) => {
    return fetch(`${api}/posts`,
        {
            headers,
            method: "POST",
            body: JSON.stringify(data)
        }
    ).then(res => res.json())
}

export const deletePost = (postId) => {
    return fetch(`${api}/posts/${postId}`,
        {
            headers,
            method: "DELETE"
        }
    ).then(res => res.json())
}