export default function posts(state = {}, action) {
    console.log(';;;;;;;;', action.post);
    switch (action.type) {
        case 'POSTS_LIST':
            return {
                ...state,
                items: action.posts.filter(post => post.deleted === false)
            }
        case 'GET_POST':
            return {
                ...state,
                items: state.items.map(post => post.id === action.post.id ? action.post : post)
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


