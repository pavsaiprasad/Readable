export function comments(state = [], action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                items: action.comments.filter(comment => comment.deleted === false)
            }
        case 'GET_COMMENT':
            return {
                ...state,
                items: state.items.map(comment => comment.id === action.comment.id ? action.comment : comment)
            }
        default:
            return state
    }
}

export default comments;
