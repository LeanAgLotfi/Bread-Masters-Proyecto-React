import React from 'react';
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="HomeConteiner">
    <div className="Home">
        <h1>BREAD MASTERS</h1>
        <img src="https://res.cloudinary.com/dsoa7ssat/image/upload/v1665593101/Panes/bread-masters_gvwrjv.png" alt="logo" /> 
        <h2>Las recetas caseras mas ricas en la palma de tu mano</h2>
    </div>
    <div className="exploradorHome">
        <h3>EXPLORE</h3>
        <button className="botonHome">
            <Link to={'/item'}><BsChevronDown/></Link>
    </button>
    </div>
    
 </div>
  )
}
