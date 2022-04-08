import { connect } from 'react-redux'
import { getBooks } from '../../../asyncActions/getBooks';
import SearchButton from './SearchButton';

const mapStateToProps = (state) => {
    return {
        currentText: state.main.currentText,
        currentCategory: state.search.currentCategory,
        currentSort: state.search.currentSort
    }
}


export default connect(mapStateToProps, { getBooks })(SearchButton)