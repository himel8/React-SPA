import React from 'react';
import './Cart.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const totalItem = props.cart.length;
    const myArray = props.cart?.[totalItem - 1];
    
    return (
        <div className='cart-header'>
            <h1>Total: {totalItem}</h1>
            <div className='custom-display'>
                <img className='custom-img' src={myArray?.img} alt="" />
                <p>{myArray?.name}</p>
            </div>
            <button className="product-btn">
            <FontAwesomeIcon icon={faShoppingBag} /> Buy Now</button>
        </div>
    );
};

export default Cart;