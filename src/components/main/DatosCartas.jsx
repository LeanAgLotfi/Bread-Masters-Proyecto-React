import React from 'react'
import { Link } from 'react-router-dom'

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
    <button className="botonCarta boton1"><Link to={`/detalle/${prod.id}`}>Lear More</Link></button>
  </div>
  )
}
