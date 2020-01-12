import React, {useState, useEffect} from 'react'
import EachTech from './EachTech';

 const TechListModal = () => {
    const [techs, setTechs]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=> {
        getTechs();
    }, []); 

const getTechs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8081/techs');
    const data = await res.json(); 
    setTechs(data); 
    setLoading(false); 
};

    return (
        <ul id= "tech-list-modal" className= "modal collection with-header">
            <li className= "collection-header">
            <h4 className= "center">Available Technicians</h4>
            </li>
            { !loading && techs.length === null? 
            (<p className="center">There are no available technicians right now . . .</p> ) : 
            ( techs.map(eachtech => <EachTech tech= {eachtech} key={eachtech.LastName}/>) ) }
        </ul>
    )
}

export default TechListModal; 