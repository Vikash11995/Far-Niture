import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import products from '../products'
import { addToCart } from '../features/Cart'
import { useDispatch } from 'react-redux'

const Details = () => {
  const dispatch = useDispatch()
  const {slug} = useParams()
  const [details,setDetails] = useState([]);
  const [quantity,setQuantity] = useState(1)
useEffect(() => {
  const findDetails = products.filter(product=> product.slug === slug);
    if (findDetails.length>0) {
      setDetails(findDetails[0])
    } else {
      <div>
<h1>Jaa Nahi hai!</h1>
      </div>
    }
}, [slug]);

const handleMinusBtn = () => {
  setQuantity((quantity - 1) < 1 ? 1 : quantity - 1);
}
const handlePlusBtn = () => {
  setQuantity(quantity + 1);
}
const handleAddCart = ()=>{
dispatch(addToCart({
  productId: details.id,
  quantity: quantity,
}))
}
  
  return (
 <div>
  {/* <h1 className='text-center text-lg font-semibold'>Products Details</h1> */}
<div className='grid md:grid-cols-2 gap-5 mt-8 grid-cols-1 '>
    <div className='md:bg-transparent bg-gray-200 flex justify-center'><img src={details.image} alt="" className='bg-full'/></div>
  <div className='flex flex-col gap-5  px-2 py-6'>
    <h1 className='text-4xl uppercase font-bold  '>{details.name}</h1>
    <p className='text-3xl font-bold text-zinc-700 '>Price : ${details.price}</p>
    <div className='flex gap-5'>
<div className='flex gap-2 justify-center items-center'>
  <button className='bg-gray-100 font-bold text-xl h-full w-10 flex justify-center items-center rounded-xl hover:bg-gray-300/70 hover:shadow-xl'onClick={handleMinusBtn}>-</button>
  <span className='bg-transparent font-bold h-full w-10 flex justify-center items-center text-xl '>{quantity}</span>
  <button className='bg-gray-100 font-bold h-full w-10 flex justify-center items-center rounded-xl text-xl hover:bg-gray-300/70 hover:shadow-xl'onClick={handlePlusBtn}>+</button>
</div>
<button className='text-white px-7 py-3 rounded-xl shadow-sm bg-slate-900 hover:bg-slate-900/90 shadow-zinc-400 hover:shadow-lg' onClick={handleAddCart}>Add to cart</button>
    </div>
    <p className='shadow-sm rounded-lg p-2'>{details.description}</p>
  </div>
</div>
 </div>
  )
}

export default Details