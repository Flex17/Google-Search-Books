const CHANGE_CURRENT_CATEGORY = 'CHANGE-CURRENT-CATEGORY';
const CHANGE_CURRENT_SORT = 'CHANGE-CURRENT-SORT';
const CHANGE_IS_SEARCHING = 'CHANGE-IS-SEARCHING';
const SET_CURRENT_TEXT = 'SET-CURRENT-TEXT';

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
    currentText: '',
    currentCategory: 'all',
    currentSort: 'relevance',
    isSearching: false,
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

        case SET_CURRENT_TEXT:
            return {
                ...state,
                currentText: action.text
            }

        case CHANGE_IS_SEARCHING:
            return {
                ...state,
                isSearching: action.isSearching
            }

        default:
            return state
    }
}

export const changeCurrentCategory = (category) => {
    return {
        type: CHANGE_CURRENT_CATEGORY,
        currentCategory: category.value
    }
}

export const changeCurrentSort = (sort) => {
    return {
        type: CHANGE_CURRENT_SORT,
        currentSort: sort.value
    }
}

export const setCurrentText = (text) => {
    return {
        type: SET_CURRENT_TEXT,
        text: text
    }
}

export const changeIsSearching = (flag) => {
    return {
        type: CHANGE_IS_SEARCHING,
        isSearching: flag
    }
}