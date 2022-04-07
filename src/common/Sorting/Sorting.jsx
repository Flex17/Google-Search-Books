import Select from 'react-select';

import css from './sorting.module.sass';

const Sorting = ({ options, defaultValue }) => {
    return (
        <div>
            <Select
                options={options}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default Sorting