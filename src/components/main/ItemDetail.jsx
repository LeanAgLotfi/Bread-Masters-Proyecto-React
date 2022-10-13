import React from 'react'

function ItemDetail({detail}){
    return(
        <>
        <div className='conteiner-Detail'>
            <img src={detail.img} alt={detail.nombre}/>
            <h1>{detail.nombre}</h1>
        </div>
            <div className="conteiner-Datos">
                <h2>Descripcion</h2>
                 <p>
                    {detail.desc}
                </p>
                <button className="botonCarta boton1">
                    <span>Add to Cart</span> 
                </button>
            </div>
        </>
     )
}

export default ItemDetail;