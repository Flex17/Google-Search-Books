import axios from "axios";
import { setData, changeMainVisibility } from "../redux/main-reducer";
import { changeIsSearching } from "../redux/search-reducer";
import { cleareData } from './../redux/main-reducer';

const key = process.env.REACT_APP_GOOGLE_API_KEY

export const getBooks = (text, currentCategory, currentSort, goBack, startIndex = 0) => {
    return (dispatch) => {
        goBack()
        const currentText = text
        const currentSearch = currentCategory === 'all' ? '' : `+subject:${currentCategory}`

        const url = `https://www.googleapis.com/books/v1/volumes?q=${currentText}${currentSearch}&orderBy=${currentSort}&maxResults=30&startIndex=${startIndex}&key=${key}`

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
            dispatch(cleareData())
            dispatch(getBooks(currentText, currentCategory, currentSort, goBack))
        }
    }
}