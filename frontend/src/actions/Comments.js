export function getComments(parentId, comments) {
    return {
        type: 'GET_COMMENTS',
        parentId,
        comments
    }
}

export function getComment(comment) {
    return {
        type: 'GET_COMMENT',
        comment
    }
}
