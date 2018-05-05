export function getComments(parentId, comments) {
    return {
        type: 'GET_COMMENTS',
        parentId,
        comments
    }
}
