import { createStore, combineReducers, applyMiddleware } from 'redux';
import mainReducer from './main-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    main: mainReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store

export default store