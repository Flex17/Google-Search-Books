const SET_CURRENT_BOOK_INFO = 'SET-CURRENT-BOOK-INFO';

const initialState = {
    img: '',
    title: '',
    categories: '',
    authors: '',
    description: ''
}

export const currentBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_BOOK_INFO:
            return {
                ...state,
                img: action.img,
                title: action.title,
                categories: action.categories,
                authors: action.authors,
                description: action.description
            }

        default:
            return state
    }
}

export const setCurrentBookInfo = (payload) => {
    return {
        type: SET_CURRENT_BOOK_INFO,
        img: payload.img,
        title: payload.title,
        categories: payload.categories,
        authors: payload.authors,
        description: payload.description
    }
}