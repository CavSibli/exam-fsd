import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) { 
            setProducts(storedProducts);
        }
    }, []); 

   
    useEffect(() => {
        if (products.length > 0) { 
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            localStorage.removeItem('products'); 
        }
    }, [products]); g
    return (
        <div className="App">
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
}

export default App;