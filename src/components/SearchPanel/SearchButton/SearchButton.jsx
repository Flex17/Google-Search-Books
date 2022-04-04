import css from './searchButton.module.sass';

const SearchButton = ({ getBooks, currentText }) => {
    return (
        <button
            className={css.searchBtn}
            onClick={() => { getBooks(currentText) }}
        >
            Search
        </button>
    )
}

export default SearchButton