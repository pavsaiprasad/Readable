const displayError = false;

export default function displayErrorPage(state = displayError, action) {
    switch (action.type) {
        case 'DISPLAY_ERROR':
            return action.displayErrorPage;
        default:
            return state;
    }
}