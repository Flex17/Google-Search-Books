import css from './sortingPanel.module.sass';

import CustomSelect from '../CustomSelect/CustomSelect';

const SortingPanel = ({ categoryOptions, sortOptions, changeCurrentCategory, changeCurrentSort, currentCategory, currentSort }) => {
    return (
        <div className={css.sorting}>
            <div className={css.item}>
                <div className={css.text}>
                    Categories
                </div>
                <CustomSelect
                    options={categoryOptions}
                    defaultValue={currentCategory}
                    changeCurrentSorting={changeCurrentCategory}
                />
            </div>
            <div className={css.item}>
                <div className={css.text}>
                    Sorting by
                </div>
                <CustomSelect
                    options={sortOptions}
                    defaultValue={currentSort}
                    changeCurrentSorting={changeCurrentSort}
                />
            </div>
        </div>
    )
}

export default SortingPanel