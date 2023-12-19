import React from 'react';
import './Cart.css';
import {useGetCartQuery} from "../../store/api";
const Cart = () => {
    const {data: cartData = []} = useGetCartQuery()

    const total = cartData.map(item => item.price * item.quantity).reduce((partialSum, a) => partialSum + a, 0)

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cartData.length}</p>
            <p>Total price: ${total}</p>
            <h4>Grand total: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;