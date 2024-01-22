import React, {useContext} from 'react'
import './cart.css';
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const {id, productImage, price, productName} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div>
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>{price} cedis</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem