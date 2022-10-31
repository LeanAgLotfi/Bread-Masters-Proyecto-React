import React from 'react'
import { useContext } from 'react'
import { ContextoCarrito } from '../../context/ContextoCarrito'
import CartDetail from '../main/CartDetail'

export default function Carrito() {

const { cart } = useContext(ContextoCarrito)

if (cart.length === 0) {
  return <h1>Aún no hay productos</h1>;
}

  return (
    <div className='carrito-contenedor'  >
        {
          cart.map((prod) => {
            return <CartDetail prod={prod} key={prod.id}/>
          })
        }
    </div>
  )
}
