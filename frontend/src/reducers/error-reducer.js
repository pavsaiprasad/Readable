const displayError = false;

export default function displayErrorPage(state = false, action) {
    switch (action.type) {
        case 'DISPLAY_ERROR':
            return action.displayErrorPage;
        default:
            return state;
    }
}