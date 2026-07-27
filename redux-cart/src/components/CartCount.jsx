import { useSelector } from "react-redux";

const CartCount = () => {
    const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);

    // const totalamount = useSelector((state) => state.cart.totalAmount);
    // const totalQuantitiy = useSelector((state) => state.cart. totalQuantity);
    return <>
        <h1>items in cart: {cartItems.length}</h1>;
        <h1>total amount : {totalAmount}</h1>;
        <h1>total quantity : {totalQuantity}</h1>;
        {/* {cartItems.map((items) => {
            
        })} */}
    </>
}
export default CartCount;