import { NavLink } from "react-router-dom";
import React from "react";

export default function ItemList() {
  return (
    <> 
    <NavLink to={'/'}>HOME</NavLink>
    <NavLink to={'/item'}>MENÚ</NavLink>
    <NavLink to={'/'}>CONTACTO</NavLink>
    </>
 
  )
}
