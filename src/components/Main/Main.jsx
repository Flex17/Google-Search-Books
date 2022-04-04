
import BooksContainer from '../Books/BooksContainer'
import css from './main.module.sass'

const Main = ({ count }) => {
    return (
        <div className={css.main}>
            <div className={css.count}>Found {count} results</div>
            <BooksContainer />
        </div>
    )
}

export default Main