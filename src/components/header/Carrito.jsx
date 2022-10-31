import React from 'react'
import { useContext } from 'react'
import { ContextoCarrito } from '../../context/ContextoCarrito'
import CartDetail from '../main/CartDetail'

export default function Carrito() {

const { cart } = useContext(ContextoCarrito)

  return (
    <div className='Item-Detail-Conteiner'  >
        {
          cart.map((prod) => {
            return <CartDetail prod={prod}/>
          })
        }
    </div>
  )
}
