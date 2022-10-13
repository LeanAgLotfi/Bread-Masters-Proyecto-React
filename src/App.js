import React from "react";
import "./components/styles/style.css";
import NavBar from "./components/header/NavBar";
import ContenedorCartas from "./components/main/ContenedorCartas";
import Footer from "./components/footer/Footer";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import ItemDetail from "./components/main/ItemDetail";
import Home from "./components/main/Home";
import ItemDetailContainer from "./components/main/ItemDetailContainer";

function App (){
    return (
    <>
       <NavBar />
      <main>
          <Home/>
          <ItemDetailContainer /> 
          <ContenedorCartas />
      </main>
        {/* <Home/> */}   
     <Footer />
    </>
  );
}

export default App;
