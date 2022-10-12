import React, { Component, useEffect, useState } from "react";
import "./components/styles/style.css";
import NavBar from "./components/header/NavBar";
import ContenedorCartas from "./components/main/ContenedorCartas";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App (){
 const[op,setOp] = useState(['home', 'menú', 'contacto']);

 useEffect(()=>{
  const TraerPanes = ()=>{
      return new Promise ((res, rej) =>{
          setTimeout(()=>{
              res(op);
          },500);
      });
  };
  TraerPanes()
  .then((res)=>{
      setOp(res)
  })
  .catch((error)=>{
      console.log(error)
  });
},[])

    return (
    <div>
       <NavBar op={op}/>
          <ContenedorCartas/>
     <Footer/>
    </div>
  );
}

export default App;
