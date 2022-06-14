import React from 'react'

const CartItem = ({ id, title, price, quantity, handleItemMinus, handleItemPlus, handleRemoveItem }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-10 col-lg-6">
                        <p>{ title }</p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="row align-items-center">
                            <div className="col-2 text-end cursor-pointer" onClick={ () => handleItemMinus(id) }>-</div>
                            <div className="col-8 text-center">
                                <div type="number" min="0" className="form-control">{quantity}</div>
                            </div>
                            <div className="col-2 text-start cursor-pointer" onClick={ () => handleItemPlus(id) }>+</div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-2 text-center">
                        <span className="fw-bold">$<span id="item-price">{ price.toFixed(2) }</span></span>
                    </div>
                    <div className="col-2 col-lg-1 text-end">
                        <div className="item-remove" onClick={ () => handleRemoveItem(id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash cursor-pointer" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem