import { connect } from 'react-redux'
import Book from './Book'

const mapStateToProps = (state) => {
    window.scrollTo(0, 0)

    const url = state.book
    return {
        img: url.img,
        title: url.title,
        categories: url.categories,
        authors: url.authors,
        description: url.description
    }
}


export default connect(mapStateToProps, {})(Book)