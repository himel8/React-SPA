import React from 'react';
import './Cart.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const{ cart } = props;
    console.log( cart)
    const totalItem = cart.length;
    const myArray = cart?.[totalItem - 1];
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const totalPrice = ( total/1000000 ).toFixed(2)
    return (
        <div className='cart-header'>
            <h1>Total: {totalItem}</h1>
            <div className='custom-display'>
                <img className='custom-img' src={myArray?.img} alt="" />
                <p>{myArray?.name}</p>
            </div>
            <h3>price: ${totalPrice} million</h3>
            <button className="product-btn">
            <FontAwesomeIcon icon={faShoppingBag} /> Buy Now</button>
        </div>
    );
};

export default Cart;