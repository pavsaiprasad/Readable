const api = 'http://localhost:3001'
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token'
}

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())

export const voteComment = (commentId, option) =>
    fetch(`${api}/comments/${commentId}`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        headers,
        method: 'POST',
        body: JSON.stringify(comment)
    }).then(res => res.json())

export const editComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        headers,
        method: 'PUT',
        body: JSON.stringify(comment)
    }).then(res => res.json())

export const deleteComment = (commentId) => {
    return fetch(`${api}/comments/${commentId}`,
        {
            headers,
            method: "DELETE"
        }
    ).then(res => res.json())
}
