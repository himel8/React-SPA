import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // data destructure
    const {name, founder, img, Operator, Type, price} = props.product
    return (
        // product cart item 
        <div className="product-card">

            {/* product img  */}
            <img src={img} alt="" />

            {/* product title  */}
            <h2 className = 'custom-header-text'>{name}</h2>
            <hr/>

            {/* product type  */}
            <p className ='custom-text'>{Type}</p>
            <hr/>

            {/* product founder  */}
            <h4>Founder: {founder}</h4>
            <hr/>

            {/* product oparator  */}
            <p><small>Oparate: {Operator}</small></p>
            <hr/>

            {/* product price  */}
            <h5 className ='custom-text'>Price: ${price}</h5>

            {/* product btn  */}
            <button onClick ={()=>props.handlerAddToCart(props.product)}        className = 'product-btn'><FontAwesomeIcon icon={faShoppingBag} /> Buy Now
            </button>
        </div>
    );
};

export default Product;