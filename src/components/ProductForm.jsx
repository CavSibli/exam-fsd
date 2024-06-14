import React, { useState } from 'react';
// la consigne demande d'envoyer un prop dans ProductForm, le seul prop nécéssaire à ce composant est addProduct et viens de ProductList
// Je précise car ceci était deja fait lors de l'etape 2 de l'examen
const ProductForm = ({ addProduct }) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        const newProduct = {
            name: name,
            description: description,
            price: parseFloat(price)  
        };

        addProduct(newProduct);
        
        setName('');
        setDescription('');
        setPrice('');
    };


    // Affiche le formulaire, lance la fonction handleSubmit lorsque le formulaire est soumis, 
    //garde les saisies et reset les champs de saisie apres la soumision
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Product</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    required
                />
            </label>
            <br />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;