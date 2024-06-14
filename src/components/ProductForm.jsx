import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
    // declarationd des variables et des fonctions useState
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    // Déclenché au moment de la soumission du form cette fonction gère la récuperation des données du formulaire dans un objet newProduct 
    // et la passse au composant parent "ProductList"
    const handleSubmit = (event) => {
        // Empêcher le comportement par défaut du formulaire(sans ça la page se recharge à la soumission du fomulaire)
        event.preventDefault();
        // Cree un objet newProduct avec les données du formulaire 
        const newProduct = {
            name: name,
            description: description,
            price: parseFloat(price)  
        };
        // New product est passé au composant parent "ProductList" et ajouté à la liste des produits
        addProduct(newProduct);
        // reset les champs de saisie
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