export const getCategories = () => fetch(
    "http://localhost:3001/categories",
    {
        headers:{
            'Authorization':'test-auth-token-1'
        }
    }
)
