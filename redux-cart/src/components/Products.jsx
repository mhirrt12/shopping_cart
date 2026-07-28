import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productThunk";

const Products = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(
        (state) => state.products
    );

    return (
        <>
            <button onClick={() => dispatch(fetchProducts())}>
                Load Products
            </button>

            {loading && <h2>Loading...</h2>}

            {error && <h2>{error}</h2>}

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </>
    );
};

export default Products;