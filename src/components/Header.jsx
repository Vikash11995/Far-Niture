import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartTab } from '../features/Cart';

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total);
  }, [carts]);

  const handleCartTabOpen = () => {
    dispatch(toggleCartTab());
  }

  return (
    <header className='flex justify-between p-4 px-8 mb-5 items-center bg-amber-200/30' >
      <Link to="/" className='text-xl font-semibold bg-amber-300 p-1 rounded-full px-3'>
        Far. Niture
      </Link>

      <div
        className='relative bg-gray-50 rounded-full flex justify-center items-center w-10 h-10 cursor-pointer'
        onClick={handleCartTabOpen}
      >
        <IoCartOutline size={28} className='' />
        <span className='p-1 bg-amber-300 rounded-full text-xs flex justify-center items-center absolute w-4 h-4 top-0 right-0'>
          {totalQuantity}
        </span>
      </div>
    </header>
  )
}

export default Header