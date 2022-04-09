import css from './customSelect.module.sass';

import Select from 'react-select'

const CustomSelect = ({ options, defaultValue, changeCurrentSorting }) => {

    const styles = {
        control: (styles) => ({
            ...styles,
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '2px',
            border: '0',
            boxShadow: '0',
        }),
        option: (styles, state) => ({
            ...styles,
            cursor: 'pointer',
            backgroundColor: state.isSelected ? '#e7e7e7' : 'white',
            color: 'black'
        })
    }
    return (
        <Select
            options={options}
            className={css.select}
            onChange={changeCurrentSorting}
            defaultValue={{ label: defaultValue, value: defaultValue }}
            styles={styles}
        />
    )
}

export default CustomSelect