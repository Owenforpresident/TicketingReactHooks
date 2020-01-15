import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
  } from '../actions/types'; //brings in all the action types that are relevant for the logs
  
  const initialState = {  //setting the inistal app-level state for the logs (not every piece of state)
    logs: null,
    current: null,          //the total app level state is made up of all the reducers using combine reducer in index.js
    loading: false,
    error: null
  };
  
  export default (state = initialState, action) => {        //takes in the inital state and an action 
    switch (action.type) {          //switch statement for eval different possible actions called from components
        case GET_LOGS:               //when get logs action is called by a component (i.e sent up)
            return {                //then return to the ROOT REDUCER (which in turn goes to the store and therefore the app level state)
              ...state,             //the state, as it was (...using the spread operator)
              logs: action.payload, //set the logReducer state value to the data sent with the action (from logActions)
              loading: false       //and set the logReducer state value for loading to false (the action will have set it to true, by calling set loading,  before making this request)
            };
        case ADD_LOG:           //so other actions can set loading before it makes api call,* see get logs action
            return {
              ...state,
              logs: [...state.logs, action.payload],            //changes the loading state property in the logReducer to true
              loading: false
             };
        case SET_LOADING:           //so other actions can set loading before it makes api call,* see get logs action
            return {
              ...state,                   //changes the loading state property in the logReducer to true
              loading: true
             };
        case DELETE_LOG:           
            return {
              ...state, 
              logs:state.logs.filter(log => log.id !== action.payload),   //The filter() method creates an array filled with all array elements that pass a test (provided as a function).          
              loading: false   //return the state (as it was, kinda) except WITH any items whos ID is NOT the one Im sending
             };     //Re-filling the state array with objects except "filtering" the one we want to remove
        default:
            return state;

    }
}