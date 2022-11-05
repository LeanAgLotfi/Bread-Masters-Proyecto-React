import { NavLink } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/ConfigFireBase";

export default function ItemCategory() {

const [category, setCategory]=useState([])

useEffect(()=>{
const categoryFire = collection(db, 'categorias')
getDocs(categoryFire)
.then((res)=>{
  const categorias = res.docs.map((cat)=>{
    return{
      id: cat.id,
      ...cat.data(),
    };
  });
  setCategory(categorias)
})
.catch((error)=>{
  console.log(error)
  })
},[])


  return (
    <> 
   {
    category.map((cat)=>{
      return(
         <NavLink key={cat.id} to={`/item/${cat.path}`}>{cat.name}</NavLink>
      );
    })
   }

    </>
  )
}