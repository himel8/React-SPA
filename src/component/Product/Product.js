import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, founder, img, Operator, Type, price} = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <h2 className = 'custom-header-text'>{name}</h2>
            <hr/>
            <p className ='custom-text'>{Type}</p>
            <hr/>
            <h4>Founder: {founder}</h4>
            <hr/>
            <p><small>Oparate: {Operator}</small></p>
            <hr/>
            <h5 className ='custom-text'>Price: ${price}</h5>
            <button onClick ={()=>props.handlerAddToCart(props.product)} className = 'product-btn'><FontAwesomeIcon icon={faShoppingBag} /> Buy Now</button>
        </div>
    );
};

export default Product;