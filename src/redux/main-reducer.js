const SET_CURRENT_TEXT = 'SET-CURRENT-TEXT';
const SET_DATA = 'SET-DATA';

const initialState = {
    data: [],
    currentText: ''
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
                data: action.data
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

export default mainReducer