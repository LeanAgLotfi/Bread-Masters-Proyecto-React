import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/ConfigFireBase';

export default function ItemDetailContainer() {

    const[detail,setDetail] = useState({});
    const[loading, setLoading] = useState(true)
    const { porId } = useParams();

useEffect(()=>{
   
const collectionProd = collection(db,'panes')
const ref = doc(collectionProd, porId)
        setTimeout(()=>{
            getDoc(ref)
            .then((res)=>{
            setDetail({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false);
            });
        },500)
       
    }, [porId]);

    if(loading){
        const color = '#f3a446'
        return(
            <div className={loading === true ? 'Loading-contenedor' : 'Loading-contenedor2'}>
            <BounceLoader size={300} color={color}/>
            </div>
        )
    }
  return (
    <div className='Item-Detail-Conteiner'>
        <ItemDetail detail={detail}/>
    </div>
  )
}
