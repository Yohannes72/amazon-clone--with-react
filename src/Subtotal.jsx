import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './Stateprovider';
function Subtotal() {
	const [{ basket }] = useStateValue();
	const getBasketTotal=(basket)=>{
	return	basket?.reduce((amount,item)=> item.price + amount,0);

	}

  return (
	<div className='subtotal'>

		<CurrencyFormat
		renderText={(value)=>{
			return 	<div>
	<p>Subtotal ({basket.length} items):<strong>{value}</strong></p>

	<small className='subtotal__gift'>
<input type="Checkbox"  />
This order contains gift
	</small>

</div>
		}}
		decimalScale={2}
		value={getBasketTotal(basket)}
		displayType={'text'}
		thousandSeparator={true}
		prefix={'$'}
		/>

		<button>Proceed to Checkout</button>

	</div>

  );
}

export default Subtotal;
