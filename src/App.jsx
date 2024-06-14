import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  
    const [products, setProducts] = useState([]);

    // Effet pour récupérer la liste de produits depuis localStorage au montage du composant
    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) { //à condition qu'il y ait des produits dans localStorage
            setProducts(storedProducts);
        }
    }, []); // ne s'exécute qu'une seule fois au montage du composant

    // Effet pour sauvegarder la liste de produits dans localStorage
    useEffect(() => {
        if (products.length > 0) { // à condition qu'il y ait des produits
            localStorage.setItem('products', JSON.stringify(products));// les ajouter à localStorage
        } else {
            localStorage.removeItem('products'); // Supprimer l'entrée si products est vide
        }
    }, [products]); // Déclenché uniquement lorsque products change

    return (
        <div className="App">
            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
}

export default App;