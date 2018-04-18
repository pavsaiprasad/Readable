export default function posts(state = [], action) {
    switch (action.type) {
        case 'POSTS_LIST':
            return action.posts
        default:
            return state
    }
}


