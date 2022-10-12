import DatosCarta from "./DatosCartas"


export default function Cartas({pan}) {


  return (
    <>
      {
        pan.map((prod)=>{
          return <DatosCarta prod={prod} key={prod.id}/>
        })
      }
    </>
  )
}
