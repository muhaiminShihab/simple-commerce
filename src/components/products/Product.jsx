import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Product() {
    
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [productId]);

    return (
        <section className="product-area mt-150 mb-5">
            <div className="container">
                {
                    (product.id > 0) ?
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center">
                            <img src={product.image} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-7">
                            <p>${product.price}</p>
                            <h1>{product.title}</h1>
                            <p className='text-justify'>
                                {product.description}
                            </p>

                            <Link to='/cart' className="btn btn-primary btn-lg mx-1 mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill mr-2" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                Add to Cart
                            </Link>
                        </div>
                    </div>

                    :
                    <div className="row align-items-center sceleton">
                        <div className="col-lg-5 text-center">
                            <div className="product-image"></div>
                        </div>
                        <div className="col-lg-7 product-data">
                            <div className="dummy" style={{ height: "25px" }}></div>
                            <div className="dummy" style={{ height: "25px" }}></div>
                            <div className="dummy" style={{ width: "100%", height: "300px" }}></div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Product