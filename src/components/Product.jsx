import React from 'react';
import '../assets/Product.css';

// recuper les props de ProductList.jsx et en affiche les informaions sous forme d'element d'une liste non ordonée
const Product = ({ product }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </li>
    );
};

export default Product;