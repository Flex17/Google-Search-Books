import { CgSearch } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import css from './searchInput.module.sass';


const SearchInput = ({ setCurrentText, currentText, getBooks, handleKeyDown }) => {
    const navigate = useNavigate()
    const goBack = () => navigate('')

    return (
        <div className={css.inputBlock}>
            <input
                type="text"
                className={css.input}
                placeholder='Write something...'
                value={currentText}
                onChange={(e) => { setCurrentText(e.target.value) }}
                onKeyDown={(e) => { handleKeyDown(e, currentText, goBack) }}
            />
            <div
                className={css.icon}
                onClick={() => { getBooks(currentText, goBack) }}
            >
                <CgSearch size={'35px'} />
            </div>
        </div>
    )
}

export default SearchInput