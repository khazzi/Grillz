import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import CartItem from './cart-item';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';
import './cart.css'


const Cart = () => {
const {cartItems, getTotalCartAmount} = useContext(ShopContext)
const totalAmount = getTotalCartAmount()
const navigate = useNavigate()

  return (
    <div className='cart'>
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
{PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
      return <CartItem data={product} />
    }
})}
        </div>
        {totalAmount > 0 ? (<div className="checkout">
          <h2>Total Amount: {totalAmount} cedis</h2>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button onClick={() => navigate('/payment')} >Make Payment</button>
        </div>) : (<h2>Your cart Is Empty</h2>)}
        
    </div>
    
  )
}

export default Cart