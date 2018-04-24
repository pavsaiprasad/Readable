export const getPosts = () => fetch(
    "http://localhost:3001/posts",
    {
        headers: {
            'Authorization': 'test-auth-token-1'
        }
    }
)

export const createPost = (data) => {
    return fetch(
        "http://localhost:3001/posts",
        {
            headers: { 'Authorization': 'test-auth-token-1', 'Content-Type': 'application/json' }, method: "POST",
            body: JSON.stringify(data)
        }
    )
}