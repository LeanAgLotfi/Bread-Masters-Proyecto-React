import React from 'react'

export default function Contacto() {
  return (
    <div className='contacto'>
      <div className='contacto-title'>
        <h1>Contacto</h1>
        <section className='h2-section'>
          <h2>Hablanos</h2>
        <p>ponte en contacto con nuestros expertos que estan activos las 24hs trabajando de lo que mas les gusta!</p>
        </section>
        
      </div>
      <div className='contacto-contacto'>
        <ul>
        <li>email : breadMasters@gmail.com</li>
        <li>tel : 1141677230</li>
        <li>redSocial : https://github.com/LeanAgLotfi</li>
       </ul>
       <img src="https://res.cloudinary.com/dsoa7ssat/image/upload/v1667652481/Panes/amazando-pan_iqm8rp.jpg" alt="" />
      </div>
      <div className='terminos-condiciones'>
         <h1>Terminos y Condiciones</h1>
         <h2>Recuerda ponerte en contacto llamando al numero en pantalla o enviando un mail siempre y cuando hayas obtenido el numero de seguimiento, ahi acordaremos los metodos de pago y el tiempo que no llevara preparar y llevar tu pedido.</h2>
      </div>
   
    </div>
  )
}
