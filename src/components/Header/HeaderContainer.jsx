
import { connect } from 'react-redux'
import { setCurrentText, setData } from './../../redux/main-reducer';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        currentText: state.main.currentText
    }
}


export default connect(mapStateToProps, { setCurrentText, setData })(Header)