import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        categoryOptions: state.search.categoryOptions,
        sortOptions: state.search.sortOptions
    }
}


export default connect(mapStateToProps, {})(Header)