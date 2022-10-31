import { NavLink } from "react-router-dom";
import React from "react";

export default function ItemCategory() {
  return (
    <> 
    <NavLink to={'/item/trigo'}>TRIGO</NavLink>
    <NavLink to={'/item/cereales'}>CEREALES</NavLink>
    <NavLink to={'/item/legumbres'}>LEGUMBRES</NavLink>
    </>
 
  )
}