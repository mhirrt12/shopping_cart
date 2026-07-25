
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
 const laptop = {
    id: 1,
    name: "Laptop",
    price: 1200
};



  return (
    <>
      <Products product={laptop} />
      <Cart />
    </>
  )
}

export default App
