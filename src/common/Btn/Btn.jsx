import { NavLink } from 'react-router-dom';

import css from './btn.module.sass';

const Btn = ({ text, click = () => { } }) => {
    return (
        <NavLink
            to={'/'}
            onClick={() => { click() }}
        >
            <button className={css.btn}>{text}</button>
        </NavLink>
    )
}

export default Btn