import React from "react";
import "./components/styles/style.css";
import NavBar from "./components/header/NavBar";
import ContenedorCartas from "./components/main/ContenedorCartas";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import ItemDetail from "./components/main/ItemDetail";
import Home from "./components/main/Home";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Contacto from "./components/main/Contacto";
import Carrito from "./components/header/Carrito";

function App (){
    return (
    <BrowserRouter>
       <NavBar />
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/item" element={<ContenedorCartas />}/>
            <Route path="/detalle/:porId" element={<ItemDetailContainer /> }/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
       </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
