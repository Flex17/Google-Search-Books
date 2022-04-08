import css from './sortingPanel.module.sass';

import Sorting from '../Sorting/Sorting';

const SortingPanel = ({ categoryOptions, sortOptions, changeCurrentCategory, changeCurrentSort, currentCategory, currentSort }) => {
    return (
        <div className={css.sorting}>
            <div className={css.item}>
                <div className={css.text}>
                    Categories
                </div>
                <Sorting
                    options={categoryOptions}
                    defaultValue={currentCategory}
                    changeCurrentSorting={changeCurrentCategory}
                />
            </div>
            <div className={css.item}>
                <div className={css.text}>
                    Sorting by
                </div>
                <Sorting
                    options={sortOptions}
                    defaultValue={currentSort}
                    changeCurrentSorting={changeCurrentSort}
                />
            </div>
        </div>
    )
}

export default SortingPanel