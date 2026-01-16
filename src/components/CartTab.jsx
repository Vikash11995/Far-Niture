import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleCartTab } from '../features/Cart';
import products from "../products";

const CartTab = () => {
  const dispatch = useDispatch();
  const carts = useSelector(store => store.cart.items);
  const CartTabStatus = useSelector(store => store.cart.CartTabStatus);

  // Calculate total amount based on cart items and product details
  const totalAmount = carts.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const handleCartClose = () => {
    dispatch(toggleCartTab());
  }

  return (
    <div className={`fixed bg-slate-700 h-full w-92 top-0 right-0 grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${CartTabStatus === false ? "translate-x-full" : ""}`}>
      <h1 className='text-center text-xl text-amber-50 font-bold'>Product Cart </h1>
      <div className='p-5'>
        {carts.length > 0 ? (
          carts.map((item, key) => (
            <CartItem key={key} data={item} />
          ))
        ) : (
          <div className="text-amber-100 text-center">Your cart is empty</div>
        )}
      </div>

      <div className='grid grid-cols-2'>
        <button
          className='text-xl bg-black text-white font-semibold cursor-pointer'
          onClick={handleCartClose}
        >
          Close
        </button>
        <button className='text-xl font-semibold text-white bg-amber-600 cursor-pointer'>  {carts.length > 0 ? (<div className='text-shadow-lg text-lg'>
         <h3>Checkout</h3> ${totalAmount.toFixed(2)} </div>    ) : (
          <div className="text-xl font-semibold text-white bg-amber-600 cursor-pointe">Checkout</div>
        )}</button>
      </div>
    </div>
  );
}

export default CartTab
