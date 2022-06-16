import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom'
import UserNavbar from '../components/navbar/UserNavbar'
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {

    const { cart, setCart, setTotal } = useContext(CartContext);

    // cancel order
    const handleCancelOrder = () => {
        setCart([]);
        setTotal([
            {
                total: 0,
                tax: 0,
                delivery: 0
            }
        ]);
    };

    return (
        <>
            <UserNavbar></UserNavbar>
            
            
                <section className="checkout-area mt-150">
                    <div className="container">
                        {
                            cart.length > 0 ?
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="card mb-5">
                                        <div className="card-header text-center">
                                            <h3>Shipping Information</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row mt-3">
                                                <div className="col-lg-6 mb-3 mb-lg-0">
                                                    {/* <label htmlFor="" className="form-label">First Name</label> */}
                                                    <input type="text" name="" id="" placeholder='First name' className="form-control" />
                                                </div>
                                                <div className="col-lg-6">
                                                    {/* <label htmlFor="" className="form-label">Last Name</label> */}
                                                    <input type="text" name="" id="" placeholder='Last name' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mt-3">
                                                <div className="col-lg-6 mb-3 mb-lg-0">
                                                    {/* <label htmlFor="" className="form-label">Email</label> */}
                                                    <input type="text" name="" id="" placeholder='Email' className="form-control" />
                                                </div>
                                                <div className="col-lg-6">
                                                    {/* <label htmlFor="" className="form-label">Phone</label> */}
                                                    <input type="text" name="" id="" placeholder='Phone' className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mt-3">
                                                <div className="col-lg-6 mb-3 mb-lg-0">
                                                    {/* <label htmlFor="" className="form-label">Shipping Country</label> */}
                                                    <select name="" id="" className="form-select">
                                                        <option value="">Bangladesh</option>
                                                        <option value="">India</option>
                                                        <option value="">Pakistan</option>
                                                        <option value="">Myanmar</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6">
                                                    {/* <label htmlFor="" className="form-label">Country Division</label> */}
                                                    <select name="" id="" className="form-select">
                                                        <option value="">Dhaka</option>
                                                        <option value="">Rajshahi</option>
                                                        <option value="">Barishal</option>
                                                        <option value="">Madaripur</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                {/* <label htmlFor="" className="form-label">Address</label> */}
                                                <input type="text" name="" id="" placeholder='Address' className="form-control" />
                                            </div>
                                            <div className="form-group row mt-3">
                                                <div className="col-lg-6 mb-3 mb-lg-0">
                                                    {/* <label htmlFor="" className="form-label">Address</label> */}
                                                    <input type="text" name="" id="" placeholder='Appartment' className="form-control" />
                                                </div>
                                                <div className="col-lg-6">
                                                    {/* <label htmlFor="" className="form-label">Postal Code</label> */}
                                                    <input type="text" name="" id="" placeholder='Postal Code' className="form-control" />
                                                </div>
                                            </div>

                                            <div className="my-5">
                                                <div className="col-6 offset-3">
                                                    <hr />
                                                    <hr />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="" className='form-label fw-bold'>Payment Method</label>
                                                <div className='text-sm text-muted mb-3'>If you want to pay with a Mobile Bank then send the total amount to [01234567890] otherwise send the total amount to [Trust Bank Limited - 0011 223344556]</div>
                                                <div className="row px-3">
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">bKash</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">Nagad</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">Rocket</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">Upay</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">Cash on Delivery</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="radio" name="payMethod" id="" className="form-check-input" />
                                                        <label htmlFor="" className="form-check-label">Bank Transfer</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mt-3">
                                                <label htmlFor="" className='form-label fw-bold'>Transaction ID</label>
                                                <div className='text-sm text-muted mb-3'>After complete the payment process fill the below field with the Transaction ID. If you select cash then avoid it.</div>
                                                <input type="text" name="" id="" placeholder='Transaction ID' className="form-control" />
                                            </div>

                                            <div className="text-end mt-3">
                                                <button className="btn btn-warning mx-2" onClick={ () => handleCancelOrder() }>Cancel order</button>
                                                <Link to='/' className="btn btn-primary">Confirm order</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :
                            <Navigate to="/" replace={true} />
                        } 
                    </div>
                </section>
        </>
    )
}

export default CheckoutPage