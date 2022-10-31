import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { panes } from '../json/datos'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const[detail,setDetail] = useState({});

    const { porId } = useParams();

    useEffect(()=>{
        const TraerPanes = ()=>{
            return new Promise ((res, rej) =>{
                 const productos = panes.find((prod)=> prod.id === Number(porId));

                setTimeout(() => {
                    res(productos);
                },500);
            });
        };
        TraerPanes()
        .then((res)=>{
            setDetail(res)
        })
        .catch((error)=>{
            console.log(error)
        });
    }, [porId]);


  return (
    <div className='Item-Detail-Conteiner'>
        <ItemDetail detail={detail}/>
    </div>
  )
}
