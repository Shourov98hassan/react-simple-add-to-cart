import React, { useState } from 'react';
import './Cart.css'

const Cart = () => {
    const [cart,setCart] = useState(1);

    const cartDecrease = () =>{
        const cartMinus = cart - 1;
        setCart(cartMinus);
        if(cartMinus==0){
            alert("you have to select at least one item!");
            setCart(cart);
        }
    };

    const cartIncrease =()=>{
        const cartPlus = cart + 1;
        setCart(cartPlus);
        if(cartPlus==6){
            alert("you can't select more than 5 items!!");
            setCart(cart);
        }
    }
    return (
        <div>
                        
<h3>Add To Cart</h3>
            <h4>Add To Cart Item: {cart}</h4>
            <div className="btn-item">
            <button className='btn' onClick={cartDecrease}>-</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn' onClick={cartIncrease}>+</button>
            </div>
        </div>
    );
};

export default Cart;