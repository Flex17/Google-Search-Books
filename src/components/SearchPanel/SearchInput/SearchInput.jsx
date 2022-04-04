import { CgSearch } from 'react-icons/cg';

import css from './searchInput.module.sass';


const SearchInput = ({ setCurrentText, currentText, getBooks, handleKeyDown }) => {

    return (
        <div className={css.inputBlock}>
            <input
                type="text"
                className={css.input}
                placeholder='Write something...'
                value={currentText}
                onChange={(e) => { setCurrentText(e.target.value) }}
                onKeyDown={(e) => { handleKeyDown(e, currentText) }}
            />
            <div
                className={css.icon}
                onClick={() => { getBooks(currentText) }}
            >
                <CgSearch size={'35px'} />
            </div>
        </div>
    )
}

export default SearchInput