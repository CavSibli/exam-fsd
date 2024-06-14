import React from 'react';
import Product from "./Product";

const ProductList = () => {
    // Liste des produits random
    const products = [
        {
            description: 'Product 1 description',
            id: 1,
            name: 'Product 1',
            price: 10.99
        },
        {
            description: 'Product 2 description',
            id: 2,
            name: 'Product 2',
            price: 19.99
        },
        {
            description: 'Product 3 description',
            id: 3,
            name: 'Product 3',
            price: 9.99
        }
    ];
    // affiche pour chaque produit de products une version du composant Product avec pour prop les données du produit
    return (
        <>
            <h1>Product List</h1>
            <ul>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
            </ul>
           
        </>
    );
};

export default ProductList;