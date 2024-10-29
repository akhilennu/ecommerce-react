import './ProductCard.css'
import AddToCart from '../AddToCart/AddToCart'

function ProductCard({item}){
    return (
        <div>
        <div className="p-card">
            <div>{item.title}</div>
            <div>{item.price}</div>
            <AddToCart product={item}/>
        </div>
        </div>
    )
}

export default ProductCard;