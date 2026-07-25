import { useSelector } from "react-redux";

const CartCount = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalamount = useSelector((state) => state.cart.totalAmount);
    const totalQuantitiy = useSelector((state) => state.cart. totalQuantity);
    return <>
        <h1>items in cart: {cartItems.length}</h1>;
        <h1>total amount : {totalamount}</h1>;
          <h1>total quantity : {totalQuantitiy}</h1>;
    </>
}
export default CartCount;