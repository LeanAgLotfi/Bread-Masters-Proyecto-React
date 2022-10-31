import React from 'react'

function CartDetail(prod) {
  return (
    <div>
        
            <img src={prod.img} alt={prod.nombre} />
            <h1>{prod.nombre}</h1>
            <h2>Precio: ${prod.price}</h2>
            <h2>Cantidad: {prod.cantidad}</h2>
            <h3>SubTotal: ${prod.price * prod.cantidad}</h3>
       
    </div>
  )
}

export default CartDetail;