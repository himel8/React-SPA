import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // set product data
    const [products, setProducts] = useState([]);
    // set cart data
    const[cart, setCart] = useState([]);

    // get product data
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // handle product function
    const handlerAddToCart = props => {
        const newcart = [...cart, props];
        setCart(newcart);
    }
    return (
        <div className = 'shop-container'>
            <div className ="product-container">
            {/* product mapping */}
            {
                products.map(product => <Product product = {product} key = {product.key} handlerAddToCart = {handlerAddToCart}></Product>)
            }
            </div>
            <div>
            {/* sent product in cart  */}
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;