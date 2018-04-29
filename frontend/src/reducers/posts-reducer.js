export default function posts(state = {}, action) {
    switch (action.type) {
        case 'POSTS_LIST':
            return {
                ...state,
                items: action.posts.filter(post => post.deleted === false)
            }
        case 'ADD_POST':
            return {
                ...state,
                items: state.items.concat([action.post])
            }
        case 'DELETE_POST':
            return {
                ...state,
                items: state.items.filter(post => post.id !== action.id)
            }
        default:
            return state
    }
}


