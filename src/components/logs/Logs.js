import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import LogItem from './LogItem';
import {getLogs} from '../../actions/logActions' //so we can call this action
//Function component
//called logs
 const Logs = ({log: {logs, loading}, getLogs}) => {  //passing the app level state "mapped" prop of log into the component, pulling out logs and loading for convienence 
    useEffect(() => {                            //remember actions that are brough in are props as well!!***Important
        getLogs();
    }, []); 


//While makling API calls
//loading it set to true
//therefore this function runs and 
//tells the users Loading. . .
if(loading || logs === null) {
    return <h2>Loading. . .</h2> 
}
//materialise collection
//if not loading and the length of the 
//logs array is =0 (its empty)
//then there are no tickets, print that out
//other wise map through each 
//object in the array, calling them eachlog
//then build a LogItem child  component for 
//eachlog produced by mapping through the logs array
    return (
        <ul className= "collection with-header">
            <li className= "collection-header">
            <h4 className= "center">Ticket Log</h4>
            </li>
            { !loading && logs.length === 0 ? (<p className="center">There are no tickets right now . . .</p> ) : 
            ( logs.map(eachlog => <LogItem log= {eachlog} key={eachlog.id}/> ) ) }
        </ul>
    )
}

const mapStateToProps = state => ({         //this is how the component accesses app level state
    log:state.log                           //we arbitrarily name a prop log, then set it to state.log 
})      //state.log refers to the log part of app level state built in the logReducer 
//this component can now acess the app level state through the prop log 

export default connect(mapStateToProps, {getLogs})(Logs);//second argument is an object of any actions that are needed to be called in this component