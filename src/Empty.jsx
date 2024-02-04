import React from 'react'
import './empty.css'
import { Link } from 'react-router-dom'
function Empty() {
  return (
	<>
	<div className='container'>
  <div className='container__info'>
	<h2 className='container__title'>Your Amazon Cart is empty.</h2>
	<p className='container__description'>
	Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
Continue shopping on the <Link To ="/" className='link'>Amazon.com homepage</Link>, learn about <Link className='link'>today's deals</Link>, or visit your <Link className='link'>Wish List</Link>.
	</p>

  </div>

 	</div>

 <div className='container__info2'>
	<h1 className='container__title2'>Your Items</h1>
	<p className='noItem'>no item to buy agin</p>
	</div>
<div className='container__info3'>
<p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart<Link className='link'> Learn more </Link>
   Do you have a gift card or promotional code? <br/>We'll ask you to enter your claim code when it's time to pay.</p>
</div>
</>
  )
}

export default Empty
