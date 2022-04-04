import BookContainer from "../Book/BookContainer";

import css from './books.module.sass'

const Books = ({ books }) => {
    const results = books ?
        books.map(book => {
            const key = book?.id
            const src = book?.volumeInfo?.imageLinks?.thumbnail
            const categories = book?.volumeInfo?.categories
            const title = book?.volumeInfo?.title
            const authors = book?.volumeInfo?.authors

            return (
                <BookContainer
                    key={key}
                    img={src}
                    categories={categories}
                    title={title}
                    authors={authors}
                />
            )
        })
        :
        <div>Nothing</div>
    return (
        <>
            <div className={css.wrapper}>
                {results}
            </div>
            <button className={css.loadMore}>Load more</button>
        </>
    )
}

export default Books