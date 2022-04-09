import { connect } from 'react-redux';
import Header from './Header';
import { changeCurrentCategory, changeCurrentSort } from '../../redux/search-reducer';

const mapStateToProps = (state) => {
    const url = state.search
    return {
        categoryOptions: url.categoryOptions,
        sortOptions: url.sortOptions,
        currentCategory: url.currentCategory,
        currentSort: url.currentSort
    }
}


export default connect(mapStateToProps, { changeCurrentCategory, changeCurrentSort })(Header)