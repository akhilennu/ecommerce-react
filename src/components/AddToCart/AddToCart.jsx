import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({product}) {
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    let quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity===0){
        return (
            <div>
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        )
    }
    else{
        return (
            <div>
                <button onClick={() => removeFromCart(product)}>
                    -
                </button>
                <span>{quantity}</span>
                <button onClick={() => addToCart(product)}>
                    +
                </button>
            </div>
        )
    }
    
}

export default AddToCart;