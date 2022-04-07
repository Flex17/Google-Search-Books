import css from './book.module.sass';

const Book = ({ img, title, categories, authors, description }) => {
    const author = authors ? authors.join(', ') : ''

    return (
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src={img} alt="img" className={css.img} />
            </div>
            <div className={css.content}>
                <div className={css.category}>{categories}</div>
                <div className={css.title}>
                    {title}
                </div>
                <div className={css.authors}>
                    {author}
                </div>
                <div className={css.descrWrapper}>
                    <span className={css.descr}>{description}</span>
                </div>
            </div>
        </div>
    )
}

export default Book