const CHANGE_CURRENT_CATEGORY = 'CHANGE-CURRENT-CATEGORY'
const CHANGE_CURRENT_SORT = 'CHANGE-CURRENT-SORT'

const initialState = {
    categoryOptions: [
        { value: 'all', label: 'all' },
        { value: 'art', label: 'art' },
        { value: 'biography', label: 'biography' },
        { value: 'computers', label: 'computers' },
        { value: 'history', label: 'history' },
        { value: 'medical', label: 'medical' },
        { value: 'poetry', label: 'poetry' },
    ],
    sortOptions: [
        { value: 'relevance', label: 'relevance' },
        { value: 'newest', label: 'newest' },
    ],
    currentCategory: '',
    currentSort: ''
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