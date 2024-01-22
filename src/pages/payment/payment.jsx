import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import flutterwave from '../../assets/images/flutterwave_logo.webp'

const Payment = () => {

    const {getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

  return (
    <div>
        <h1>Make Your Payment</h1>
        <p>Your Order Total is {totalAmount} cedis</p>
        <p>Make payment through: </p>
        <a href='https://flutterwave.com/pay/7bmcdftvlzop'><img src={flutterwave} /></a> 

    </div>
  )
}

export default Payment