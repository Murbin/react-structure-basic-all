// store.js
import { createStore, applyMiddleware  } from 'redux';
import counterReducer from './reducers';
import { thunk } from 'redux-thunk';

// Sin thunk
// const store = createStore(counterReducer);

//Con thunk
const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
