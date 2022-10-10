import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const carts = props.carts;
    const { carts } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of carts) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;

    }
    // const tax = totalPrice * 10 / 100;
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="cart-area">
            <h2>Order Summary</h2>
            <p>Selected Items: {carts.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping Charge: ${totalShipping}</p>
            <p>Tax (10%): ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;