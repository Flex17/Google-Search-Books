const CHANGE_CURRENT_CATEGORY = 'CHANGE-CURRENT-CATEGORY'
const CHANGE_CURRENT_SORT = 'CHANGE-CURRENT-SORT'

const initialState = {
    categoryOptions: [
        { value: 'all' },
        { value: 'art' },
        { value: 'biography' },
        { value: 'computers' },
        { value: 'history' },
        { value: 'medical' },
        { value: 'poetry' },
    ],
    sortOptions: [
        { value: 'relevance' },
        { value: 'newest' },
    ],
    currentCategory: 'all',
    currentSort: 'relevance'
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        case CHANGE_CURRENT_SORT:
            return {
                ...state,
                currentSort: action.currentSort
            }

        default:
            return state
    }
}

export const changeCurrentCategory = (category) => {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        currentCategory: category
    }
}

export const changeCurrentSort = (sort) => {
    return {
        type: CHANGE_CURRENT_SORT,
        currentSort: sort
    }
}