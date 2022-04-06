import BooksContainer from '../Books/BooksContainer';
import Spinner from '../../common/Spinner/Spinner';

import css from './main.module.sass';
import { Route, Routes } from 'react-router-dom';
import BookContainer from '../Book/BookContainer';

const Main = ({ count, isSearching, isMainVisible }) => {
    return (
        <>
            {
                isMainVisible ?
                    <>
                        {
                            isSearching ?
                                <div className={css.loader}>
                                    <Spinner />
                                </div>
                                :
                                <Routes>
                                    <Route path='*' element={
                                        <div className={css.main}>
                                            <div className={css.count}>Found {count} results</div>
                                            <BooksContainer />
                                        </div>
                                    } />
                                    <Route path='/:id' element={
                                        <BookContainer />
                                    } />
                                </Routes>
                        }
                    </>
                    :
                    <div></div>
            }
        </>
    )
}

export default Main