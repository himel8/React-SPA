import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handlerAddToCart = props => {
        const newcart = [...cart, props];
        setCart(newcart);
    }
    return (
        <div className = 'display'>
            <div className ="display-product">
            {
                products.map(product => <Product product = {product} key = {product.key} handlerAddToCart = {handlerAddToCart}></Product>)
            }
            </div>
            <div>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;