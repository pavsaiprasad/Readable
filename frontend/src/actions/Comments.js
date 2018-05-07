export function getComments(postId, comments) {
    return {
        type: 'GET_COMMENTS',
        postId,
        comments
    }
}

export function getComment(comment) {
    return {
        type: 'GET_COMMENT',
        comment
    }
}

export const addComment = function (comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}
