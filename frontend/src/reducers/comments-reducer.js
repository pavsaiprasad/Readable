export function comments(state = [], action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                items: action.comments.filter(comment => comment.deleted === false)
            }
        default:
            return state
    }
}

export default comments;
