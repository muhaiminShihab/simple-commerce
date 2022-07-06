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
                        (products.length > 0) ?
                        products.map(item =>
                            <ProductCard photo={item.image} title={item.title} price={item.price} id={item.id} key={item.id} />
                        )

                        :
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item =>
                            <div className="col-6 col-lg-3">
                                <div className="product-card sceleton">
                                    <div className="product-image"></div>
                                    <div className="product-data">
                                        <div className="dummy"></div>
                                        <div className="dummy"></div>

                                        <div className="mt-4 text-end">
                                            <div className='btn-cart'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Products