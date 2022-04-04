import SearchButtonContainer from './SearchButton/SearchButtonContainer';
import SearchInputContainer from './SearchInput/SearchInputContainer';

import css from './searchPanel.module.sass';

const SearchPanel = () => {
    return (
        <div className={css.searchBlock}>
            <SearchInputContainer />
            <SearchButtonContainer />
        </div>
    )
}

export default SearchPanel