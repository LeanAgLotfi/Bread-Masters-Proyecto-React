import React from 'react'

export default function DatosCartas({prod}) {
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
    <button className="botonCarta boton1"><span>Add to Cart</span> </button>
    <button className="botonCarta boton2"><span>Lear More</span></button>
  </div>
  )
}
