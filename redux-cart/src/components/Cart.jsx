import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return <h1>{cartItems.length}</h1>;
};