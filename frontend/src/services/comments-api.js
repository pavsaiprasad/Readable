const api = 'http://localhost:3001'
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'token'
}

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())