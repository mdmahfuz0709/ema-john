import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const carts = props.carts;
    return (
        <div className="cart-area">
            <h2>Order Summary</h2>
            <p>Selected Items: ${carts.length}</p>
            <p>Total Price: {carts.price}</p>
            <p>Total Shiping Charge: ${ }</p>
            <p>Tax: ${ }</p>
            <h3>Grand Total: ${ }</h3>
        </div>
    );
};

export default Cart;