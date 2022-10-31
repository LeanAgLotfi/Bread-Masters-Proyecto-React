import { createContext } from "react";
import { useState } from "react";

export const ContextoCarrito = createContext();

const Provider = (props)=>{

const [cart, setCart] = useState([]);

const addToCart = (item , cantidad)=>{
    const producto = {...item, cantidad};
    if (enCarrito(producto.id)) {
        alert('Ya está en el carrito flaco, sumale la cantidad');
    }else{
        setCart([...cart,producto]);
    }
}

const enCarrito = (id) => cart.some((prod) => prod.id === id);

const removeAll = ()=> setCart([]);

// const removeToCart = () =>  ;

// const sumarUnidades = ()=> ;

// const sumaTotal = () => ;

    return(
        <ContextoCarrito.Provider value={{ cart ,addToCart, removeAll}}> 
            {props.children}
        </ContextoCarrito.Provider >   
    )
}

export default Provider;