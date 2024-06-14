import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {



  const [products, setProducts] = useState([]);
  

  // Maintenant que le state du tableau ce fait à cet étage il faut envoyer products et setProducts à ProductList.jsx en props.
  return (
   <ProductList products={products} setProducts={setProducts}/>
  )
}

export default App;
