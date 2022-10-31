import {React,  useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextoCarrito } from '../../context/ContextoCarrito';
import Contador from './Contador';

function ItemDetail({detail}){
const [unidades, setUnidades] = useState(0);

const { addToCart } = useContext(ContextoCarrito);

function CantidadPanes(horneados){
    setUnidades(horneados);
    addToCart(detail, horneados);
};

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
                    <h1>Precio = ${detail.price}</h1>
                    
                    {
                        unidades === 0 ?(
                             <Contador cantidad={CantidadPanes} stock={detail.stock} initial={1}/>
                        ):(
                            <button className="botonCarta boton2"><Link to={'/carrito'}>Ir al carrito</Link></button>
                        )       
                    }  
            </div>
        </>
     )
}

export default ItemDetail;