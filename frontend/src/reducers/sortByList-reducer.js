const initialSortByList = {
    items: [
        {
            'id': 'score-asc',
            'value': 'Votes Low-High'
        },
        {
            'id': 'score-desc',
            'value': 'Votes High-Low'
        },
        {
            'id': 'date-asc',
            'value': 'Date Old-New'
        },
        {
            'id': 'date-desc',
            'value': 'Date New-Old'
        },
    ],
    selectedOption: 'score-desc'
};

export default function sortByList(state = initialSortByList, action) {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                selectedOption: action.selectedOption
            };
        default:
            return state;
    }
}