
import { connect } from 'react-redux'
import SearchInput from './SearchInput';
import { setCurrentText } from './../../../redux/main-reducer';
import { getBooks, handleKeyDown } from '../../../asyncActions/getBooks';

const mapStateToProps = (state) => {
    return {
        isSearching: state.main.isSearching,
        currentText: state.main.currentText
    }
}


export default connect(mapStateToProps, { setCurrentText, getBooks, handleKeyDown })(SearchInput)