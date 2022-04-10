import { connect } from 'react-redux';
import Main from './Main';
import { changeMainVisibility } from '../../redux/main-reducer';

const mapStateToProps = (state) => {
    const url = state.main
    return {
        count: url.totalCount,
        isSearching: state.search.isSearching,
        isMainVisible: url.isMainVisible
    }
}


export default connect(mapStateToProps, { changeMainVisibility })(Main)