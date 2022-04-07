import css from './btn.module.sass'

const Btn = ({ text }) => {
    return (
        <button className={css.btn}>{text}</button>
    )
}

export default Btn