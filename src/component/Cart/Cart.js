import React from 'react';
import './Cart.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const{ cart } = props;
    const totalItem = cart.length;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const totalPrice = ( total/1000000 ).toFixed(2);
    const handleBuyBtn = () =>{
        window.location.reload();
    }
    return (
        <div className='cart-header'>
            <h3>Total Items: {totalItem}</h3>
            <h3>Price: ${totalPrice} million</h3>
            {
                    cart.map(product => <div className='custom-display'>
                    <img className='custom-img' src={product.img} alt="" />
                    <p>{product.name}</p>
                </div>)
            }
            <button className="product-btn" onClick = {handleBuyBtn}>
            <FontAwesomeIcon icon={faShoppingBag} /> Buy Now</button>
        </div>
    );
};

export default Cart;