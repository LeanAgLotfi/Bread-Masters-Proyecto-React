import { NavLink } from "react-router-dom";
import React from "react";

export default function ItemList({prod}) {
  return (
    <> 
    <NavLink>{prod}</NavLink>
    </>
 
  )
}
