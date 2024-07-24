import { useEffect, useState } from 'react';
import pedirProductos  from './pedirProductos';
import ItemList from './ItemList';
export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  console.log(productos);


  useEffect(() => {
    pedirProductos()
    .then((res) => {
      setProductos(res)
    })
  },[])

  
    

  return (
    <div>
      <ItemList productos = {productos} />
    </div>
  )
}
