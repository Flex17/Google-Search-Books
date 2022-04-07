import css from './sortingPanel.module.sass';

import Sorting from '../Sorting/Sorting';

const SortingPanel = ({ categoryOptions, sortOptions }) => {
    return (
        <div className={css.sorting}>
            <div className={css.item}>
                <div className={css.text}>
                    Categories
                </div>
                <Sorting
                    options={categoryOptions}
                    defaultValue={categoryOptions[0]}
                />
            </div>
            <div className={css.item}>
                <div className={css.text}>
                    Sorting by
                </div>
                <Sorting
                    options={sortOptions}
                    defaultValue={sortOptions[0]}
                />
            </div>
        </div>
    )
}

export default SortingPanel