import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { panes } from '../json/datos'
import Cartas from './Cartas'
import CategoriasPanes from './CategoriasPanes'


export default function ContenedorCartas() {

   const[pan , setPan] = useState([])

   const { categoryName } = useParams();
   //trigo - cereales - legumbres

    useEffect(()=>{
        const TraerPanes = ()=>{
            return new Promise ((res, rej) =>{
                const prodFiltrados = panes.filter(
                    (prod) => prod.category === categoryName
                );
                const prod = categoryName ? prodFiltrados : panes;
                setTimeout(()=>{
                    res(prod);
                },2000);
            });
        };
        TraerPanes()
        .then((res)=>{
            setPan(res)
        })
        .catch((error)=>{
            console.log(error)
        });
    },[categoryName])

  return (
   <> 
   <CategoriasPanes/> 
    <div className='contenedorGrid'>
        <Cartas pan={pan}/>
    </div>
   </>
       
  )
}
