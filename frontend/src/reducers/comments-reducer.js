export function comments(state = [], action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return {
                ...state,
                postId: {
                    ...state.postId,
                    [action.postId]: {
                        items: action.comments.filter(comment => comment.deleted === false)
                    }
                }
            }
        case 'GET_COMMENT':
            return {
                ...state,
                postId: {
                    ...state.postId,
                    [action.comment.parentId]: {
                        items: state.postId[action.comment.parentId].items.map(comment => comment.id === action.comment.id ? action.comment : comment)
                    }
                }
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                postId: {
                    ...state.postId,
                    [action.parentId]: {
                        items: state.postId && state.postId[action.comment.parentId] && state.postId[action.comment.parentId].rows ? state.postId[action.comment.parentId].rows.concat([action.comment]) : [action.comment]
                    }
                }
            }
        default:
            return state
    }
}

export default comments;
