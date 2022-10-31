import { createContext } from "react";
import { useState } from "react";

export const ContextoCarrito = createContext();

const Provider = (props)=>{

const [cart, setCart] = useState([]);

const addToCart = (detail , cantidad)=>{
    const producto = {...detail, cantidad};
    if (enCarrito(producto.id)) {
        sumarUnidades(producto)
    }else{
        setCart([...cart,producto]);
    }
}

const enCarrito = (id) => cart.some((prod) => prod.id === id);

const removeAll = ()=> setCart([]);

console.log(cart)

// const removeToCart = () =>  ;

const sumarUnidades = (prodAgregado)=>{
    const carritoActualizado = cart.map((prodNuevo)=> {
        if(prodNuevo.id === prodAgregado.id){
            const productoActualizado = {
                ...prodNuevo, cantidad: prodAgregado.cantidad,
            };
            return productoActualizado;
        }else{
            return prodNuevo;
        }
    });
    return setCart(carritoActualizado);
};
// const sumaTotal = () => ;

    return(
        <ContextoCarrito.Provider value={{ cart ,addToCart, removeAll}}> 
            {props.children}
        </ContextoCarrito.Provider >   
    )
}

export default Provider;