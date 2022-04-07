import SortingPanel from '../../common/SortingPanel/SortingPanel';
import SearchPanel from '../SearchPanel/SearchPanel';

import css from './header.module.sass';

const Header = ({ categoryOptions, sortOptions }) => {
    return (
        <div className={css.header}>
            <div className={css.background}></div>
            <div className='container'>
                <h1 className={css.title}>Search for books</h1>
                <SearchPanel />
                <SortingPanel
                    categoryOptions={categoryOptions}
                    sortOptions={sortOptions}
                />
            </div>
        </div>
    )
}

export default Header