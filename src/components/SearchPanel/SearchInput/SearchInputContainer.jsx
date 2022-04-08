
import { connect } from 'react-redux'
import SearchInput from './SearchInput';
import { setCurrentText } from './../../../redux/main-reducer';
import { getBooks, handleKeyDown } from '../../../asyncActions/getBooks';

const mapStateToProps = (state) => {
    return {
        currentText: state.main.currentText,
        currentCategory: state.search.currentCategory,
        currentSort: state.search.currentSort
    }
}


export default connect(mapStateToProps, { setCurrentText, getBooks, handleKeyDown })(SearchInput)