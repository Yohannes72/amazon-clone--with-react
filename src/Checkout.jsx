import React from 'react'
import './checkout.css'
import CheckoutProduct from './Checkoutproduct';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal'
import Empty from './Empty';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  if(basket.length===0){
  return <Empty />
  }
  else{
  return (
	<div className='checkout'>
    <div className="checkout__left">

        <h2 className="checkout__title">Your shopping cart <span className='price'>price</span></h2>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
  </div>
  )
 }
}

export default Checkout
