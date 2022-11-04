import React from 'react'
import { useContext } from 'react'
import { ContextoCarrito } from '../../context/ContextoCarrito'
import CartDetail from '../main/CartDetail'
import { Link } from 'react-router-dom'

export default function Carrito() {

const { cart, Total, removeAll } = useContext(ContextoCarrito)

if (cart.length === 0) {
  return (
  <> 
  <div className='SinComprar'>
     <h1>Aún no hay productos en el carrito</h1>
  <button className="botonCarta boton2"><Link to={'/item'}>Seguir comprando?</Link></button>
  </div>
 
  </>
 
  );
}

  return (
  <>

    <div className='carrito-contenedor'  >
        {
          cart.map((prod) => {
            return <CartDetail prod={prod} key={prod.id}/>
          })
        }
    </div>
      <div className='total'>
        <h1>TOTAL:${Total()}</h1>
        <div className='total2'>
          <button className="botonCarta boton1"><Link to={'/form'}>CheckOut</Link></button>
          <button className="botonCarta boton1" onClick={removeAll}>Eliminar X</button>
        </div>
        
        
        
      </div>
  </>
  )
}
