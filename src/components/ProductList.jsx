import React, { useState } from 'react';
import Product from './Product';
import ProductForm from './ProductForm';


// la

const ProductList = () => {
    const [products, setProducts] = useState([
        // {
        //     description: 'Product 1 description',
        //     id: 1,
        //     name: 'Product 1',
        //     price: 10.99
        // },
        // {
        //     description: 'Product 2 description',
        //     id: 2,
        //     name: 'Product 2',
        //     price: 19.99
        // },
        // {
        //     description: 'Product 3 description',
        //     id: 3,
        //     name: 'Product 3',
        //     price: 9.99
        // }
    ]);

    const addProduct = (newProduct) => {
        // Generate a unique ID for the new product
        newProduct.id = products.length + 1;
        // Update the products state with the new product
        setProducts([...products, newProduct]);
    };

    return (
        <>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
            <ProductForm addProduct={addProduct} />
        </>
    );
};

export default ProductList;
