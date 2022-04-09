const SET_DATA = 'SET-DATA';
const CHANGE_MAIN_VISIBILITY = 'CHANGE-MAIN-VISIBILITY'

const initialState = {
    data: [],
    resultsCount: 0,
    isMainVisible: false
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data,
                resultsCount: action.data.totalItems
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

export const setData = (data) => {
    return {
        type: SET_DATA,
        data: data
    }
}


export const changeMainVisibility = (flag) => {
    return {
        type: CHANGE_MAIN_VISIBILITY,
        isMainVisible: flag
    }
}

export default mainReducer