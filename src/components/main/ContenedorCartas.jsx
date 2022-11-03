import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Cartas from './Cartas'
import CategoriasPanes from './CategoriasPanes'
import BounceLoader from "react-spinners/BounceLoader";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/ConfigFireBase'



export default function ContenedorCartas() {

   const[pan , setPan] = useState([])

   const[loading, setLoading] = useState(true)

   const { categoryName } = useParams();
   //trigo - cereales - legumbres

    useEffect(()=>{
        // const TraerPanes = ()=>{
        //     return new Promise ((res, rej) =>{
        //         const prodFiltrados = panes.filter(
        //             (prod) => prod.category === categoryName
        //         );
        //         const prod = categoryName ? prodFiltrados : panes;
        //         setTimeout(()=>{
        //             res(prod);
        //         },2000);
        //     });
        // };
        // TraerPanes()
        const collectionProd = collection(db,'panes');
        const logica = categoryName  ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;
        setTimeout(()=>{
            getDocs(logica)
        .then((res)=>{
            
            const productos = res.docs.map((prod)=>{
                return{
                    id: prod.id,
                    ...prod.data()
                };
            });
            setPan(productos);
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false);
        });
        },2000);
       
    },[categoryName])


if(loading){
    const color = '#f3a446'
    return(
        <div className={loading === true ? 'Loading-contenedor' : 'Loading-contenedor2'}>
        <BounceLoader size={300} color={color}/>
        </div>
    )
}

  return (
   <>
    <CategoriasPanes/> 
    <div className='contenedorGrid'>
        <Cartas pan={pan}/>
    </div>
   </>   
  );
}
