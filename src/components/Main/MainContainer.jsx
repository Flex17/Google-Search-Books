import { connect } from 'react-redux'
import Main from './Main'

const mapStateToProps = (state) => {
    return {
        count: state.main.resultsCount
    }
}


export default connect(mapStateToProps, {})(Main)