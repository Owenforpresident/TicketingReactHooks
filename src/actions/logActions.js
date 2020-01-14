import {
    GET_LOGS,               //bring in relevant actions once agin
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
  } from './types';
  
  export const getLogs = () => {        //function that actually performs the actions
    return async (dispatch) => {      // an async function w/ dispatch as an argument, sending an action w/  of setLoading to the logReducer (which will then be evaluated in a switch statement and manipulate state)
      setLoading();                 //calls the setloading action(doesn't have to be a component that calls actions)
      const res = await fetch('http://localhost:8081/logs');  // wait for the api call to backend using fetch to return
      const data = await res.json();    //set the returned data to json and save a variable
  
      dispatch({            //this is why we brought in dispatch to the function
        type: GET_LOGS,     //dispatch an action type of getlogs to the logreducer and send along the info from the backend
        payload: data       //the data will then be used by the logreducer to update the state 
      });
    };
  };

  export const setLoading = () => {     //straight forward action, sends action type of set loading to the logreducer
    return {
      type: SET_LOADING                 //in the log reducer the state will be then changed, no payload necessary
    };
  };