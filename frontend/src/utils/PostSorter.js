import sortBy from 'sort-by';

export const sortPosts = (posts, sortByList) => {
    if (sortByList && sortByList.items && posts && posts.items) {
        const selectedSortOption = sortByList.items.filter(sortBy => sortBy.id === sortByList.selectedOption)[0];
        posts.items.sort(sortBy(...selectedSortOption.sortByFields));
    }
    return posts;
}