import React from 'react';
import '../assets/Product.css';


const Product = ({ product }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>Description du produit: {product.description}</p>
            <p>Price: {product.price}</p>
        </li>
    );
};

export default Product;