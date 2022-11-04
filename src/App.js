import {React} from "react";
import "./components/styles/style.css";
import NavBar from "./components/header/NavBar";
import ContenedorCartas from "./components/main/ContenedorCartas";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from "./components/main/Contacto";
import Home from "./components/main/Home";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Carrito from "./components/header/Carrito";
import Provider from './context/ContextoCarrito';
import Form from "./components/formulario/Form";


function App (){
    return (     
<Provider>         
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/item/:categoryName" element={<ContenedorCartas />}/>
      <Route path="/item" element={<ContenedorCartas />}/>
      <Route path="/detalle/:porId" element={<ItemDetailContainer /> }/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
</Provider> 
  );
}

export default App;
