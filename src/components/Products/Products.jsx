import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";



function Products() {
    // let products = []
    // fetch('https://run.mocky.io/v3/854e5509-2555-4f4b-9146-b18f28818b43')
    // .then(response => response.json())
    // .then(data => products = data)
    // .catch(err => console.error(err));
    // if we use this way, async operation will return the result later
    // this will result in return being called before the fetch returns something

    const [products, setProducts] = useState([]) // this is a react hook

    useEffect(() => {
        fetch('https://run.mocky.io/v3/854e5509-2555-4f4b-9146-b18f28818b43')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []) //[] -> only mounting --> life cycle methods

    return (
        <div>
            {products.map((item) => {
                return <ProductCard item={item} />
            })}
        </div>
    )
}

export default Products;