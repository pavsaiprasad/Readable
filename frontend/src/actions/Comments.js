import * as CommentsAPI from '../services/comments-api';

export const getComments = (parentId, comments) => ({
    type: RETRIEVE_COMMENTS,
    parentId,
    comments
})

export const dispatchComments = function (id) {
    return function (dispatch) {
        return CommentsAPI.getComments(id)
            .then((res) => { return (res.json()) })
            .then(function (comments) {
                return dispatch(getComments(id, comments))
            }
            )
    }
}