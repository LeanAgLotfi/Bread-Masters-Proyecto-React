export default function Form() {
  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }
  return (
    <div>
        <form action="">
            <imput type='text' name='nombre'></imput>
            <imput type='text' name='apellido'></imput>
            <button>enviar</button>
        </form>
    </div>
  )
}
