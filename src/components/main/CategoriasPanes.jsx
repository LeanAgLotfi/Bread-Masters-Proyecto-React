import {React} from 'react'
import ItemCategory from '../header/itemCategory';



function CategoriasPanes() {

  return (
    <div>
       <nav className="NavegacionPage">
        <ul className="MenuNavegable2">
          <ItemCategory/>
       </ul>
      </nav>
    </div>
  )
}

export default CategoriasPanes;