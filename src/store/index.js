// createStore is no longer used
import { configureStore } from '@reduxjs/toolkit'   // Before use : npm install @reduxjs/toolkit
import { combineReducers } from '@reduxjs/toolkit';

// rootReducer
const rootReducer = () => {
    return null;
}

// reducers combined
const reducers = combineReducers({
    root: rootReducer
});

// Create STORE
export default store = configureStore({reducer: reducers});
// The store now has redux-thunk added and the Redux DevTools Extension is turned on