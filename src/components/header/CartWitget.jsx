import React from 'react'
import { BsCart2, BsFillMoonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function CartWitget() {
  return (
    <>
    <li><Link to={'/Carrito'}><BsCart2 className='carro-luna'/></Link></li>
    <li><Link to={'/'}><BsFillMoonFill className='carro-luna'/></Link></li>
    </>
  )
}
