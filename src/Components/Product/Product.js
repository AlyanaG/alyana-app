import React, {useEffect} from 'react';
import {useChangeCartItemMutation, useGetCartQuery, useRemoveFromCartMutation} from "../../store/api";
import {FaMinus, FaPlus} from "react-icons/fa6";
import './Product.css';

const Product = (props) => {
    const {id, name, price, seller, img} = props.product;

    const {data: cartData} = useGetCartQuery()
    const [changeCartItem] = useChangeCartItemMutation()
    const [removeFromCart] = useRemoveFromCartMutation()

    const cartItem = cartData?.filter(item => item.id === id)[0]

    useEffect(() => {
        if(cartItem?.quantity === 0) {
            removeFromCart(id)
        }
    }, [cartItem?.quantity])

    return (
        <div className='big-div'>
            <div className='products-info'>
                <img src={img} alt=''></img>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Brand: {seller}</p>
            </div>
            {cartData?.map(item => item.id).includes(id) ?
                <div className='btn-cart-new'>
                    <div onClick={() => changeCartItem({...props.product, quantity: cartItem.quantity - 1})}><FaMinus/></div>
                    {cartItem?.quantity}
                    <div onClick={() => changeCartItem({...props.product, quantity: cartItem.quantity + 1})}><FaPlus/></div>
                </div>
            : <button onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>}
        </div>
    );
};

export default Product;