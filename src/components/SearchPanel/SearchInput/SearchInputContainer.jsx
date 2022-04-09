import { connect } from 'react-redux'
import SearchInput from './SearchInput';
import { setCurrentText } from './../../../redux/search-reducer';
import { getBooks, handleKeyDown } from '../../../asyncActions/getBooks';

const mapStateToProps = (state) => {
    const url = state.search
    return {
        currentText: url.currentText,
        currentCategory: url.currentCategory,
        currentSort: url.currentSort
    }
}


export default connect(mapStateToProps, { setCurrentText, getBooks, handleKeyDown })(SearchInput)