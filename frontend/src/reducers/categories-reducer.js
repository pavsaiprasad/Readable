export default function categories(state = [], action) {
  switch (action.type) {
    case 'CATEGORY_LIST':
      return action.categories
    default:
      return state
  }
}


