import React from 'react'
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { panes } from '../json/datos'
import Cartas from './Cartas'


export default function ContenedorCartas() {

   const[pan,setPan] = useState([])

    

    useEffect(()=>{
        const TraerPanes = ()=>{
            return new Promise ((res, rej) =>{
                // const productos = panes.find((prod)=> prod.id === Number(id))
                setTimeout(()=>{
                    res(panes);
                },500);
            });
        };
        TraerPanes()
        .then((res)=>{
            setPan(res)
        })
        .catch((error)=>{
            console.log(error)
        });
    },[])

  return (
    <div className='contenedorGrid'>
        <Cartas pan={pan}/>
    </div>
  )
}
