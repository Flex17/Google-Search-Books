import { connect } from 'react-redux'
import Books from './Books'
import { getBooks } from './../../asyncActions/getBooks';

const mapStateToProps = (state) => {
    const urlSearch = state.search
    const urlMain = state.main
    return {
        books: urlMain.data,
        totalCount: urlMain.totalCount,
        startIndex: urlMain.startIndex,
        currentText: urlSearch.currentText,
        currentCategory: urlSearch.currentCategory,
        currentSort: urlSearch.currentSort,
    }
}


export default connect(mapStateToProps, { getBooks })(Books)