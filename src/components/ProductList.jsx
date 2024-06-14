import Product from './Product';
import ProductForm from './ProductForm';

// les props reçu de app.jsx sont entré en argument à ProductList
const ProductList = ({ products, setProducts }) => {
    
    
    const addProduct = (newProduct) => {
        newProduct.id = products.length + 1;
        setProducts([...products, newProduct]);
    };


    //Affiche un Product.jsx pour chaque element du tableau products et le formulaire via le compant ProductForm.jsx
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
