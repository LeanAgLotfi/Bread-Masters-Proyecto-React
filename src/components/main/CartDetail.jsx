import React from 'react'
import { useContext } from 'react';
import { ContextoCarrito } from '../../context/ContextoCarrito';

function CartDetail({prod}) {

  const { removeToCart} = useContext(ContextoCarrito);


  return (
    <div className='carrito-detalle'>
        <div className='carrito-contenedor-precio'>
        <h1>{prod.nombre}</h1>
            <img className='carrito-img' src={prod.img} alt={prod.nombre} />
            
        </div>
        <p>Añadido a tu carrito!!</p>
            <div className='carrito-contenedor-precio'>
                <p>Precio: ${prod.price}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>SubTotal: ${prod.price * prod.cantidad}</p>
            </div>
            <div className='contenedor-botones'>
            <button className="botonCarta boton1" onClick={() => removeToCart(prod.id)}>delete</button>
            </div>
    </div>
  )
}

export default CartDetail;