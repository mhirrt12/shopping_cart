import { useSelector } from "react-redux";

const CartCount = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return <h1>items in cart: {cartItems.length}</h1>;
}
export default CartCount;