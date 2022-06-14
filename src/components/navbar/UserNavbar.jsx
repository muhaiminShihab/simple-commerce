import { useLayoutEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { CartContext } from '../../contexts/CartContext'

function UserNavbar() {

    const { cart } = useContext(CartContext);

    // scroll to top
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        // Header Area
        <header className="header-area">
            <div className="header-main">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-lg-3 order-1">
                            <Link to="/" className='logo'>
                                {/* <h2>Simple E-commerce</h2> */}
                                <img src={Logo} alt="" width="150" />
                            </Link>
                        </div>
                        <div className="col-12 col-lg-6 text-center order-3 order-lg-2">
                            <div className="search-bar">
                                <input type="text" placeholder='Search what you want...' className="form-control" />
                                {/* <a href='' className="input-btn">Search</a> */}
                                <button className="input-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 text-end order-2 order-lg-3">
                            <ul className="menu">
                                <li>
                                    <Link to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    <span className="cart-item-count">{ cart.length }</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                    <span className="cart-item-count"></span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/sign-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default UserNavbar