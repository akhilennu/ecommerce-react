import { useContext } from "react";
import CartContext from "../../context/CartContext";
import AddToCart from "../AddToCart/AddToCart";

function FullCart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext)
    console.log(cart);
    return (
        <div>
            {Object.keys(cart).map((item) => 
                <div>
                    <div>{cart[item].title}</div>
                    <AddToCart product={cart[item]}/>
                </div>
            )
            }
        </div>
    )
}

export default FullCart;