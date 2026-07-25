import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const Products = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
        </button>
    );
};