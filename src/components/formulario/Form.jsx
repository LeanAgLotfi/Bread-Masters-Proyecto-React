import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { useState } from "react"
import { ContextoCarrito } from "../../context/ContextoCarrito"
import { db } from "../../services/ConfigFireBase"
import { Link } from "react-router-dom"

export default function Form() {

const {cart, Total, removeAll} = useContext(ContextoCarrito)
const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [order, setOrder] = useState('')

const totalPrice = Total()

  const handleSubmit = (e)=>{

    e.preventDefault();

    const order= {
      buyer:{ name, lastName },
      items:cart,
      total:totalPrice,
      date:serverTimestamp(),
    }

    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    .then((res)=>{
      setOrder(res.id)
      removeAll();
    })
    .catch((error)=>{
      console.log(error)
    })
  };

if (order) {
  return (
    <div className="formulario2">
      <h1> Gracias por su compra!!
      </h1>
      <h1>Tu numero de seguimiento es ~${order}</h1>
    </div>
  )
}

const handleChangeName = (e) => {
  setName(e.target.value);
};

const handleChangeLastName = (e) => {
  setLastName(e.target.value);
};

  return (
    <>
        <form onSubmit={handleSubmit} action=''>
          <section className="formulario">
            <h1>Formulario Bread Masters</h1>
            <input className='formControls' type='text' name='nombre' id='nombre' placeholder='Ingrese su Nombre*' onChange={handleChangeName} value={name}/>
            <input className='formControls' type='text' name='apellido' id='apellido' placeholder='Ingrese su Apellido*' onChange={handleChangeLastName} value={lastName}/>
            <input className='formControls' type='email' name='correo' id='correo' placeholder='Ingrese su Correo Electronico*'/>
            <input className='formControls' type='email' name='correo' id='correo' placeholder='Reingrese su Correo Electronico*'/>
            <p>Estoy de acuerdo con los <Link to={'/contacto'}>Terminos y Condiciones</Link></p>
            <input className="registro" type="submit" name="registrar"/>
          </section>
        </form>
    </>
  )
}
