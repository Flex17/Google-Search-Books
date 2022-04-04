import css from './book.module.sass';


const Book = ({ img, categories, title, authors }) => {
    // debugger
    const author = authors ? authors.join(', ') : ''
    const category = categories ? categories[0] : ' '

    return (
        <div className={css.wrapper}>
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
                {
                    author
                }
            </div>
        </div>
    )
}

export default Book