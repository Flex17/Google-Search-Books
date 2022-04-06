import { connect } from 'react-redux';
import Main from './Main';
import { changeMainVisibility } from '../../redux/main-reducer';

const mapStateToProps = (state) => {
    return {
        count: state.main.resultsCount,
        isSearching: state.main.isSearching,
        isMainVisible: state.main.isMainVisible
    }
}


export default connect(mapStateToProps, { changeMainVisibility })(Main)