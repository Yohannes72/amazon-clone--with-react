import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Header2 from './Header2';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



function Header() {
	const [{ basket,user }, dispatch] = useStateValue();
  return (
	<div>


	<div className='header'>
		<Link to="/">
<img className='header__logo border__white'
 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
 </Link>

 <div class="icon-address border__white">
					<p className='icon__paragraph'>deliver to</p>
					<div className='address__icon'>
					<p> <PlaceIcon/></p>
					<p className='country'>Ethiopia</p>
					</div>

                </div>
 <div className='header__search'>
	<input className='header__input' type="text" name="" value=""/>
     <SearchIcon className='searchIcon'/>
 </div>
<div className='header__nav' >
	<div className='en border__white'>
		<img className='country__flag' src="https://usflag.com/media/catalog/product/cache/b8e923e14d7c682b1d3cb64a9a9384a9/u/s/us-flag_2.jpg" alt=""/>
	<p>EN </p>
	<p className='arrow'><ArrowDropDownIcon  /></p>
	</div>
<Link to="/login">
	<div className='header__option border__white'>
		<span className='header__optionline1'>Hello, {user ? user.displayName : 'Guest'} </span>
		<div className='account'>
		<span className='header__optionline2'>Account & List </span>
		<p className='arrow'><ArrowDropDownIcon  /></p>
		</div>


	</div>
	</Link>
	<div className='header__option border__white'>
		<span className='header__optionline1'>Returns</span>
		<span className='header__optionline2'>& orders</span>

	</div>
	<Link to="/Checkout">
	<div className='header__option border__white'>

		<span className='header__optionline1 zero'><strong>{basket.length}</strong></span>
		<span className='header__optionline2'><AddShoppingCartIcon /></span>

	</div>
	</Link>
	{/* <div className='shoppingBascket'>
		<ShoppingBasketIcon/>
		<span className='numBascket'>0</span>
	</div> */}

</div>

	</div>
	<div>
<Header2 />
</div>

	</div>
  )
}

export default Header
