import { useState, useEffect,React} from 'react'
import './home.css'
import Product from './Product'


function Home() {

		const [currentImage, setCurrentImage] = useState(0);
		const images = [
		  'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
		  'https://m.media-amazon.com/images/I/71wixeWfdBL._SX3000_.jpg',

		];

		useEffect(() => {
		  const interval = setInterval(() => {
			setCurrentImage(currentImage => (currentImage + 1) % images.length);
		  }, 5000);

		  return () => {
			clearInterval(interval);
		  };
		}, []);
  return (
	<div>



	<div className='home'>
<div className='home__container ' >
 <img className='home__image '
	 src={images[currentImage]} alt="" />
<div className='home__row'>
		<Product
		id="1"
		title="small gift under $20"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v2._SY608_CB573698005_.jpg"
		/>

		<Product
		id="2"
		title="Beauty steal under $25"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v5._SY608_CB573698005_.jpg"
		/>
		<Product
		id="3"

		title="Holiday deals in fashion"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v4._SY608_CB573698005_.jpg"
		/>
		<Product
		id="4"
		title="Shop holiday gift guides"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_2x_758x608_EN._SY608_CB576347904_.jpg"
		/>
	 </div>
	 <div className='home__row'>
		<Product
		id="5"
		title="Deals in PCs"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg"
		/>
		<Product
		id="6"
		title="Shop activity trackers and smartwatches"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg"/>
		<Product
		id="7"
		title="Toys under $25"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
		/>
		<Product
		id="7"
		title="Upgrade your office furniture"
		price={1669}
		rating={5}
		image="https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_2X_Furnitrure_v2._SY608_CB577544739_.jpg"
		/>
	 </div>


</div>
	</div>
	</div>
  )
}

export default Home
