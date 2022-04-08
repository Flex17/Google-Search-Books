import { useNavigate } from 'react-router-dom';
import css from './searchButton.module.sass';

const SearchButton = ({ getBooks, currentText, currentCategory, currentSort }) => {
    const navigate = useNavigate()
    const goBack = () => navigate('/')
    return (
        <button
            className={css.searchBtn}
            onClick={() => { getBooks(currentText, currentCategory, currentSort, goBack) }}
        >
            Search
        </button>
    )
}

export default SearchButton