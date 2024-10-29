import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import FullCart from './components/FullCart/FullCart';

function App() {
  let [cart, setCart] = useState({});
  let [showCart, setShowCart] = useState(false);
  function addToCart(product) {
    let newCart = {...cart}
    if(!newCart[product.id]){
      newCart[product.id] = {...product, quantity:0};
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
    // console.log(cart);
  }
  function removeFromCart(product) {
    let newCart = {...cart}
    if(newCart[product.id].quantity===1){
      delete newCart[product.id]
    }
    else{
      newCart[product.id].quantity -=1;
    }
    setCart(newCart);
  }
  function displayCartOrProducts(){
    if(showCart){
      return <FullCart/>
    }
    else{
      return <Products />
    }
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div>
        <button onClick={() => setShowCart(!showCart)}>{showCart ? "Show Products" : "Show Cart"}</button>
        {displayCartOrProducts()}
      </div>
    </CartContext.Provider>
  );
}

export default App;
