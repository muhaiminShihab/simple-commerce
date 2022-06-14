import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <section className="products-area my-5">
            <div className="container">
                <div className="row">
                    {
                        products.map(item =>
                            <ProductCard photo={item.image} title={item.title} price={item.price} id={item.id} key={item.id} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Products