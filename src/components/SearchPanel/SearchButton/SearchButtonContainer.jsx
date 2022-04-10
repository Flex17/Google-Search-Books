import { connect } from 'react-redux'
import { getBooks } from '../../../asyncActions/getBooks';
import SearchButton from './SearchButton';
import { cleareData } from './../../../redux/main-reducer';

const mapStateToProps = (state) => {
    const url = state.search
    return {
        currentText: url.currentText,
        currentCategory: url.currentCategory,
        currentSort: url.currentSort
    }
}


export default connect(mapStateToProps, { getBooks, cleareData })(SearchButton)