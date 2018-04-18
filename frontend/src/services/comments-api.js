export const getComments = (id) => fetch(
    `http://localhost:3001/posts/${id}/comments`,
    {
        headers: {
            'Authorization': 'test-auth-token-1'
        }
    }
)