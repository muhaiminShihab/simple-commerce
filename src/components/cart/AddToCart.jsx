import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const AddToCart = () => {

    const { cart, setCart, total, setTotal } = useContext(CartContext);
    const grand = total[0].total + total[0].tax + total[0].delivery;

    // reset cart
    const handleEmptyCart = () => {
        setCart([]);
        setTotal([
            {
                total: 0,
                tax: 0,
                delivery: 0
            }
        ]);
    }

    // decrease cart item
    const handleItemMinus = (id) => {
        let newCart = [...cart];
        const cartItem = newCart.find(item => {
            return item.id === id;
        })

        cartItem.quantity--;
        cartItem.price -= cartItem.unit;
        setCart(newCart);

        let mainTotal = [...total];
        mainTotal[0].total -= cartItem.unit;
        mainTotal[0].tax = (mainTotal[0].total * 3) / 100;
        mainTotal[0].delivery = (mainTotal[0].total * 10) / 100;
        setTotal(mainTotal);
    };

    // increase cart item
    const handleItemPlus = (id) => {
        let newCart = [...cart];
        const cartItem = newCart.find(item => {
            return item.id === id;
        })

        cartItem.quantity++;
        cartItem.price += cartItem.unit;
        setCart(newCart);

        let mainTotal = [...total];
        mainTotal[0].total += cartItem.unit;
        mainTotal[0].tax = (mainTotal[0].total * 3) / 100;
        mainTotal[0].delivery = (mainTotal[0].total * 10) / 100;
        setTotal(mainTotal);
    };

    // remove cart item
    const handleRemoveItem = (id) => {
        let mainCart = [...cart];
        let mainTotal = [...total];

        const cartItem = mainCart.find(item => {
            return item.id === id;
        });

        mainTotal[0].total -= cartItem.unit;
        mainTotal[0].tax = (mainTotal[0].total * 3) / 100;
        mainTotal[0].delivery = (mainTotal[0].total * 10) / 100;
        setTotal(mainTotal);

        const newCart = mainCart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);

        console.log(mainTotal);
    };

    return (
        <section className="cart-area mt-150 mb-5">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-12 text-center text-lg-start mb-3">
                                <button onClick={ () => handleEmptyCart() } className="btn btn-warning mx-2">Empty cart</button>
                                <Link to='/' className="btn btn-primary mx-2">Continue shopping</Link>
                            </div>
                            <div className="col-12">
                                {
                                    cart.length > 0 ?
                                    cart.map(item => 
                                        <CartItem key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity} handleItemMinus={handleItemMinus} handleItemPlus={handleItemPlus} handleRemoveItem={handleRemoveItem}></CartItem>
                                    )

                                    :
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-12 text-center">
                                                    <p> Cart is empty. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="fw-bold mb-5">Cart Calculation</h3>

                                <div className="row align-items-center mb-3">
                                    <div className="col fw-bold">Purchase Amount</div>
                                    <div className="col text-end fw-bold">$ { total[0].total.toFixed(2) }</div>
                                </div>
                                <div className="row align-items-center mb-3">
                                    <div className="col fw-bold">Tax Amount</div>
                                    <div className="col text-end fw-bold">$ { total[0].tax.toFixed(2) }</div>
                                </div>
                                <div className="row align-items-center mb-3">
                                    <div className="col fw-bold">Delivery Charge</div>
                                    <div className="col text-end fw-bold">$ { total[0].delivery.toFixed(2) }</div>
                                </div>
                                <hr />
                                <div className="row align-items-center mb-3">
                                    <div className="col fw-bold">Total Amount</div>
                                    <div className="col text-end fw-bold">$ { grand.toFixed(2) }</div>
                                </div>

                                {/* <div className="form-group mt-4">
                                    <label htmlFor="" className="form-label fw-bold">Coupon</label>
                                    <input type="text" className="form-control" placeholder="Enter coupon code" />
                                </div>
                                <div className="btn btn-primary col-12 mt-2" id="coupon-btn">Apply coupon</div> */}

                                <Link to='/checkout' className="btn btn-primary col-12 mt-3" id="coupon-btn">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddToCart