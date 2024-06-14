import React, { useState, useRef } from 'react';

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    // Références pour les champs de formulaire
    const nameInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    const priceInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            name: name,
            description: description,
            price: parseFloat(price)
        };

        addProduct(newProduct);

        // Reset des champs de formulaire
        setName('');
        setDescription('');
        setPrice('');

        // Mettre le focus sur le premier champ (name) après la soumission
        nameInputRef.current.focus();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Product</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={nameInputRef} // Ref pour le champ Name qui servira à porter le focus
                    required
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ref={descriptionInputRef} // Ref  pour le champ Description, parce que c'est demndédans la consigne 
                    required
                />
            </label>
            <br />
            <label>
                Price:
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    ref={priceInputRef} // Ref  pour le champ Price, parce que c'est demndédans la consigne 
                    required
                />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
