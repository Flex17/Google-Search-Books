import { NavLink } from 'react-router-dom'
import css from './btn.module.sass'

const Btn = ({ text }) => {
    return (
        <NavLink to={'/'}>
            <button className={css.btn}>{text}</button>
        </NavLink>
    )
}

export default Btn