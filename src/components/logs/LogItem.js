import React from 'react'
//LogItem takes in a single log as a prop from the 
//Logs component parent
//The Logs component(parent) has a component level state with an array of objects 
//which was set by the API call in the Logs component
 const LogItem = ({log}) => {
    return (
        <li>
        <div>
    <a href="#!">{log.message}</a>
        </div>
        </li>
    )
}
export default LogItem