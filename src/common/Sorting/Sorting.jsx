import css from './sorting.module.sass';

const Sorting = ({ options, defaultValue, changeCurrentSorting }) => {
    return (
        <select
            className={css.select}
            value={defaultValue}
            onChange={(e) => { changeCurrentSorting(e.target.value) }}
        >
            {
                options.map(option => {
                    const value = option.value
                    const id = Math.random() * 100_000

                    return (
                        <option
                            className={css.item}
                            key={id}
                            value={value}
                        >
                            {value}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default Sorting