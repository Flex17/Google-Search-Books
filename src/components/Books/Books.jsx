import BookContainer from "../BookCard/BookCardContainer";

import css from './books.module.sass'

const Books = ({ books }) => {
    const results = books ?
        books.map(book => {
            const id = book?.id
            const key = Math.random() * 100_000
            const src = book?.volumeInfo?.imageLinks?.thumbnail
            const categories = book?.volumeInfo?.categories
            const title = book?.volumeInfo?.title
            const authors = book?.volumeInfo?.authors
            const description = book?.volumeInfo?.description

            return (
                <BookContainer
                    key={key}
                    id={id}
                    img={src}
                    categories={categories}
                    title={title}
                    authors={authors}
                    description={description}
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