import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='card'>
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)}>Add to Card</button>
        </div>
    );
};

export default Product;