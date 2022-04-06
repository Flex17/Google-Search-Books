import css from './book.module.sass'

const Book = ({ img, title, categories, authors, description }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src={img} alt="" className={css.img} />
            </div>
        </div>
    )
}

export default Book