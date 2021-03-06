import SortingPanel from '../../common/SortingPanel/SortingPanel';
import SearchPanel from '../SearchPanel/SearchPanel';

import css from './header.module.sass';

const Header = ({ categoryOptions, sortOptions, changeCurrentCategory, changeCurrentSort, currentCategory, currentSort }) => {
    return (
        <div className={css.header}>
            <div className={css.background}></div>
            <div className='container'>
                <h1 className={css.title}>Search for books</h1>
                <SearchPanel />
                <SortingPanel
                    categoryOptions={categoryOptions}
                    sortOptions={sortOptions}
                    changeCurrentCategory={changeCurrentCategory}
                    changeCurrentSort={changeCurrentSort}
                    currentCategory={currentCategory}
                    currentSort={currentSort}
                />
            </div>
        </div>
    )
}

export default Header