import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { panes } from '../json/datos'

export default function ItemDetailContainer() {

    const[detail,setDetail] = useState({})

    useEffect(()=>{
        const TraerPanes = ()=>{
            return new Promise ((res, rej) =>{
                 const productos = panes.find((prod)=> prod.id === 1)
                setTimeout(()=>{
                    res(productos);
                },2000);
            });
        };
        TraerPanes()
        .then((res)=>{
            setDetail(res)
        })
        .catch((error)=>{
            console.log(error)
        });
    },[])


  return (
    <div className='Item-Detail-Conteiner'>
        <ItemDetail detail={detail}/>
    </div>
  )
}
