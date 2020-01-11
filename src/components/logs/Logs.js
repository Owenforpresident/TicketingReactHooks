import React, {useState, useEffect} from 'react'

 const Logs = () => {

    const [logs, setLogs]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=> {
        getLogs();
    }, []); 

const getLogs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8081/logs');
    const data = await res.json(); 
    setLogs(data); 
    setLoading(false); 
};

if(loading) {
    return <h2>Loading. . .</h2>
}

    return (
        <ul className= "collection-with-header">
            <li className= "collection-header">
            <h4 className= "center">Ticket Log</h4>
            </li>
            { !loading && logs.length === 0 ? (<p className="center">There are no tickets right now . . .</p> ) : 
            ( logs.map(log => <h4>{log.message}</h4>) ) }
        </ul>
    )
}

export default Logs; 