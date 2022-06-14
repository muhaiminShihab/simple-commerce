import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState([{
            total: 0,
            tax: 0,
            delivery: 0
        }]);

    const carts = { cart, setCart, total, setTotal };

    return (
        <CartContext.Provider value={ carts }>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider