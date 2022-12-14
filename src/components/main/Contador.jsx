import { useState, React } from 'react'

 function Contador (props){
    const [contador, setContador] = useState(props.initial);

    const aumentar = ()=>{
      contador < props.stock && setContador (contador+1);
    }
  
    const disminuir = ()=>{
      
      contador > props.initial && setContador(contador - 1);

    }

  return (
    <div className='contenedorContador' >
        <h1>{contador}</h1>
        <div className='contador'>
        <button className="botonCarta boton2" disabled={contador === props.stock} onClick={aumentar}>+</button>
        <button className="botonCarta boton1" onClick={()=> {props.cantidad(contador)}} ><span>Add to Cart</span> </button>
        <button className="botonCarta boton2" disabled={contador === props.initial} onClick={disminuir}>-</button>
        </div>
    </div>
  )
}

export default Contador;
