import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from './main-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { currentBookReducer } from './currentBook-reducer';

const reducers = combineReducers({
    main: mainReducer,
    book: currentBookReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store