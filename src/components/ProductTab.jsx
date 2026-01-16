import React from 'react'
import {Link} from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart';


const ProductTab = (props) => {
    const {id,name,price,image,slug} = props.data;
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleCartItems = ()=>{
dispatch(addToCart({
  productId:id,
  quantity:1,
}))
    }
    return (
      <div className='bg-gray-100 p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
        <div>
        <img src={image} alt={name}className='md:h-70 h-78 w-full object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </div>
        </Link>
       <Link to={slug}>
       <h1 className='text-2xl font-medium text-center py-3'>{name}</h1>
       </Link>
       <div className='flex justify-between items-center'>
       <span className='text-lg font-semibold'> <p>${price}</p></span>
        <button className='flex justify-center bg-gray-300 p-1.5 rounded-sm gap-2 items-center cursor-pointer' onClick={handleCartItems}>
  <IoCartOutline size={21} className='' />
  Add to Cart
        </button>
       </div>
      </div>
  )
}

export default ProductTab