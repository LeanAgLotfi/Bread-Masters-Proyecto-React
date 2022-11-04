import React from 'react'
import { Link } from 'react-router-dom'
// import { useContext } from 'react';
// import { ContextoCarrito } from '../../context/ContextoCarrito';

export default function DatosCartas({prod}) {

  // const { addToCart, sumarUnidades } = useContext(ContextoCarrito);


  return (
    <div className="carta">
    <div className="imagenCarta">
      <img src={prod.img} alt="" />
    </div>
    <h1 className="NombreCarta">{prod.nombre}</h1>
    <ul className="PrecioCarta">
      <li>${prod.price}</li>
      <li>/300g</li>
    </ul>
    <button className="botonCarta boton1"><Link to={`/detalle/${prod.id}`}>Lear More</Link></button>
  </div>
  )
}
