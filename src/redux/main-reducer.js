const SET_DATA = 'SET-DATA';
const CHANGE_MAIN_VISIBILITY = 'CHANGE-MAIN-VISIBILITY';
const CLEARE_DATA = 'CLEARE-DATA'

const initialState = {
    data: [],
    totalCount: 0,
    isMainVisible: false,
    paginationStep: 30,
    startIndex: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: [...state.data, ...action.data.items],
                totalCount: action.data.totalItems,
                startIndex: state.startIndex + state.paginationStep
            }


        case CHANGE_MAIN_VISIBILITY:
            return {
                ...state,
                isMainVisible: action.isMainVisible
            }

        case CLEARE_DATA:
            return {
                ...state,
                data: []
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

export const cleareData = () => {
    return {
        type: CLEARE_DATA
    }
}

export default mainReducer