import React from 'react'
import './checkoutproduct.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './Stateprovider';
function Checkoutproduct({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromCart=()=>{
		dispatch({
			type:'DELETE',
			id:id,
		});
	};
  return (
	<div className="checkoutProduct">
	<img className="checkoutProduct__image" src={image} alt='' />
	<div className="checkoutProduct__info">
	  <p className="checkoutProduct__title">{title}</p>
	  <p className="checkoutProduct__price">
	  <p className='thirty'>30% off</p>

		<strong>$</strong>
		<strong>{price}</strong>
	  </p>
   <p className='instock'>in stock</p>
	  <small className='subtotal__gift'>
<input type="Checkbox"  />
This is a gift<span><Link className='link'>learn more</Link></span>
	</small>
	 <div className='delete'>

		<p className='delete__delete' onClick={removeFromCart}>delete</p>
		<p className='delete__delete'>save for later</p>
		<p className='delete__delete'>compare with similar item</p>
		<p className='delete__delete'>share</p>


	 </div>

	</div>
  </div>
  )
}

export default Checkoutproduct
