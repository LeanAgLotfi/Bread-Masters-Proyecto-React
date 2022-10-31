import React from 'react'


function CartDetail({prod}) {

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
            <button className="botonCarta boton2">+</button>
       
    </div>
  )
}

export default CartDetail;