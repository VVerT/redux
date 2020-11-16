import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import mainReducer from "./mainReducer"

export default combineReducers({
    counter: counterReducer,
    main: mainReducer
})