export const getPosts = () => fetch(
    "http://localhost:3001/posts",
    {
        headers: {
            'Authorization': 'test-auth-token-1'
        }
    }
)