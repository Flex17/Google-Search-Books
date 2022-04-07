import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from './main-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { currentBookReducer } from './currentBook-reducer';
import { searchReducer } from './search-reducer';

const reducers = combineReducers({
    main: mainReducer,
    book: currentBookReducer,
    search: searchReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store