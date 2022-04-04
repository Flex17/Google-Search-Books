import { connect } from 'react-redux'
import Books from './Books'

const mapStateToProps = (state) => {
    return {
        books: state.main.data.items
    }
}


export default connect(mapStateToProps, {})(Books)