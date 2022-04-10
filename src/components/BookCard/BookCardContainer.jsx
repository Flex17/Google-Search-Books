import { connect } from 'react-redux';
import BookCard from './BookCard';
import { setCurrentBookInfo } from '../../redux/currentBook-reducer';

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, { setCurrentBookInfo })(BookCard)