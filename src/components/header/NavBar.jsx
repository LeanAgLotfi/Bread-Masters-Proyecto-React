import ItemList from "./ItemList";
import React from "react";
import CartWitget from "./CartWitget";
import Logo from "./Logo";
import "../styles/style.css";


export default function NavBar({op}) {
  return (
    <header>
        <div className="ContenedorNav">
          <Logo/>
        <nav className="NavegacionPage">
            <ul className="MenuNavegable">
              {
                op.map((prod, index)=>{
                  return <ItemList prod={prod} key={index}/>
                })
              }
            </ul>  
        </nav>
        <nav className="NavegacionPage"> 
            <ul className="MenuNavegableIcons">
               <CartWitget/>
            </ul>
        </nav>
    </div>
    </header>
  )
}
