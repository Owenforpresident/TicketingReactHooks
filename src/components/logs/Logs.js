import React, {useState, useEffect} from 'react'
import LogItem from './LogItem';
//Function component
//called logs
 const Logs = () => {
//this is where we are setting component level state 
//const, the the state variabe, the function for changing state, and useState 
//useState below is setting the logs state variable to an empty array
    const [logs, setLogs]= useState([]);
    //setting the loading state variable to false 
    const [loading, setLoading]= useState(false);
//making an api call using the getlogs function
//when the component mounts
    useEffect(()=> {
        getLogs();
    }, []); 
//getLogs is an async function
//sets the loading variable in state to true
// makes the API call and formats it in JSON
//Sets the state variable of data to the JSON response 
//sets loading back to false too
const getLogs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8081/logs');
    const data = await res.json(); 
    setLogs(data); 
    setLoading(false); 
};

//While makling API calls
//loading it set to true
//therefore this function runs and 
//tells the users Loading. . .
if(loading) {
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

export default Logs; 