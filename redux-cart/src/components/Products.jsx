import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunk";

const Products = () => {

const dispatch = useDispatch();

const {products, loading, error} =
useSelector(state => state.products);


return (
<button onClick={()=>dispatch(fetchProducts())}>
Load Products
</button>
)

}