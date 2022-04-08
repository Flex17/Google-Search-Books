import { connect } from 'react-redux';
import Header from './Header';
import { changeCurrentCategory, changeCurrentSort } from '../../redux/search-reducer';

const mapStateToProps = (state) => {
    return {
        categoryOptions: state.search.categoryOptions,
        sortOptions: state.search.sortOptions,
        currentCategory: state.search.currentCategory,
        currentSort: state.search.currentSort
    }
}


export default connect(mapStateToProps, { changeCurrentCategory, changeCurrentSort })(Header)