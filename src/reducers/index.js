import { combineReducers } from 'redux'; //allows us to combine all "sub" reducers
import logReducer from './logReducer'; //an example of a "sub" reducer

export default combineReducers({
  log: logReducer,                  //"log"is the arbitrary name given to the part of state associated with logs
});                                 //it contains all the state data created/changed by the log reducer because of this statement
//this is how all the "individual" parts of state are managed 