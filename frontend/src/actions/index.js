import * as CategoriesAPI from '../services/categories-api';

export const categoryList = categories => ({
  type: 'CATEGORY_LIST',
  categories
})

export const dispatchCategories = function () {
  debugger;
  return function (dispatch) {
    return CategoriesAPI.getCategories()
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        return dispatch(categoryList(data.categories))
      }
      )
  }
}