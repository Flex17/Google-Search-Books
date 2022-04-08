import axios from "axios";
import { setData, changeIsSearching, changeMainVisibility } from "../redux/main-reducer";

const key = process.env.REACT_APP_GOOGLE_API_KEY

export const getBooks = (text, currentCategory, currentSort, goBack) => {
    return (dispatch) => {
        goBack()
        const currentText = text
        const currentSearch = currentCategory === 'all' ? '' : `+subject:${currentCategory}`

        const url = `https://www.googleapis.com/books/v1/volumes?q=${currentText}${currentSearch}&subject=computers&orderBy=${currentSort}&maxResults=12&key=${key}`

        dispatch(changeMainVisibility(true))
        dispatch(changeIsSearching(true))

        axios.get(url)
            .then(response => {
                dispatch(setData(response.data))
                dispatch(changeIsSearching(false))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const handleKeyDown = (e, currentText, goBack, currentCategory, currentSort) => {
    return (dispatch) => {
        if (e.code === 'Enter') {
            dispatch(getBooks(currentText, currentCategory, currentSort, goBack))
        }
    }
}