import { NavLink } from 'react-router-dom';
import css from './bookCard.module.sass';


const BookCard = ({ img, categories, title, authors, id, description, setCurrentBookInfo }) => {
    const author = authors ? authors.join(', ') : ''
    const category = categories ? categories[0] : ' '

    return (
        <NavLink
            to={`/${id}`}
            className={css.wrapper}
            onClick={() => { setCurrentBookInfo({ img, title, categories, authors, description }) }}
        >
            <div className={css.imgWrapper}>
                <img className={css.img} src={img} alt="cover" />
            </div>
            <div className={css.category}>
                {category}
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.authors}>
                {author}
            </div>
        </NavLink>
    )
}

export default BookCard