const initialSortByList = {
    items: [
        {
            'id': 'score-desc',
            'value': 'Votes High-Low',
            'sortByFields': ['-voteScore', '-timestamp']
        },
        {
            'id': 'score-asc',
            'value': 'Votes Low-High',
            'sortByFields': ['voteScore', '-timestamp']
        },
        {
            'id': 'date-desc',
            'value': 'Date New-Old',
            'sortByFields': ['-timestamp', '-voteScore']
        },
        {
            'id': 'date-asc',
            'value': 'Date Old-New',
            'sortByFields': ['timestamp', '-voteScore']
        }
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