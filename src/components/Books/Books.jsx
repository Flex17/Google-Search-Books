import Btn from "../../common/Btn/Btn";
import BookCardContainer from "../BookCard/BookCardContainer";

import css from './books.module.sass'

const Books = ({ books, currentText, currentCategory, currentSort, getBooks, startIndex, totalCount }) => {
    const click = () => {
        getBooks(currentText, currentCategory, currentSort, () => { }, startIndex)
    }

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
                <BookCardContainer
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
            {
                startIndex >= totalCount ?
                    <div></div>
                    :
                    <Btn
                        text={'Load more'}
                        click={click}
                    />
            }
        </>
    )
}

export default Books