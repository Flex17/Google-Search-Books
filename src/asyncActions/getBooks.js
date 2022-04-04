import axios from "axios"

import { setData } from "../redux/main-reducer"

const key = process.env.REACT_APP_GOOGLE_API_KEY

export const getBooks = (text) => {
    return (dispatch) => {
        const currentText = text
        const url = `https://www.googleapis.com/books/v1/volumes?q=` + currentText + `:keyes&orderBy=newest&maxResults=12&key=` + key

        axios.get(url)
            .then(response => {
                dispatch(setData(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const handleKeyDown = (e, currentText) => {
    return (dispatch) => {
        if (e.code === 'Enter') {
            dispatch(getBooks(currentText))
        }
    }
}