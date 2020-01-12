import React from 'react'

const EachTech = ({tech}) => {
    return (
        
            <li className= "collection-item"> 
           <div className= "center">{tech.firstName}{' '}{ tech.lastName}</div> 
            </li>
       
    )
}

export default EachTech;