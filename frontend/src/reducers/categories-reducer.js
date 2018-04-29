export default function categories(state = [], action) {
  switch (action.type) {
    case 'CATEGORY_LIST':
      return {
        ...state,
        items: action.categories
      };
    default:
      return state
  }
}


