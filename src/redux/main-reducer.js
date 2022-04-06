const SET_CURRENT_TEXT = 'SET-CURRENT-TEXT';
const SET_DATA = 'SET-DATA';
const CHANGE_IS_SEARCHING = 'CHANGE-IS-SEARCHING';
const CHANGE_MAIN_VISIBILITY = 'CHANGE-MAIN-VISIBILITY'

const initialState = {
    data: [],
    isSearching: false,
    currentText: '',
    resultsCount: 0,
    isMainVisible: false
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TEXT:
            return {
                ...state,
                currentText: action.text
            }

        case SET_DATA:
            return {
                ...state,
                data: action.data,
                resultsCount: action.data.totalItems
            }

        case CHANGE_IS_SEARCHING:
            return {
                ...state,
                isSearching: action.isSearching
            }

        case CHANGE_MAIN_VISIBILITY:
            return {
                ...state,
                isMainVisible: action.isMainVisible
            }

        default:
            return state
    }
}

export const setCurrentText = (text) => {
    return {
        type: SET_CURRENT_TEXT,
        text: text
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        data: data
    }
}

export const changeIsSearching = (flag) => {
    return {
        type: CHANGE_IS_SEARCHING,
        isSearching: flag
    }
}

export const changeMainVisibility = (flag) => {
    return {
        type: CHANGE_MAIN_VISIBILITY,
        isMainVisible: flag
    }
}

export default mainReducer