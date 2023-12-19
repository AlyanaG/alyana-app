import React, { useEffect, useState } from 'react';
import {useAddToCartMutation, useChangeCartItemMutation, useGetCartQuery} from "../../store/api";
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import cart from "../Cart/Cart";
import './Shop.css';
const Shop = () => {
    const [products] = useProducts();

    const {data: cartData} = useGetCartQuery()
    const [addToCart] = useAddToCartMutation()
    const [changeCartItem] = useChangeCartItemMutation()

    const handleAddToCart = product => {
        const cartItem = cartData.filter(item => item.id === product.id)[0]
        if(cartData.map(item => item.id).includes(product.id)) {
            changeCartItem({...product, quantity: cartItem.quantity + 1})
        } else addToCart({...product, quantity: 1})
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={() => handleAddToCart(product)}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;