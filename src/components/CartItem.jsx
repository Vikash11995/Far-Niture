import React, { useState, useEffect, use } from "react";
import products from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../features/Cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.id === productId);
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuant = () => {
dispatch(changeQuantity(
  {
    productId : productId,
    quantity: quantity -1,
  }
))
  }

  const handlePlusQuant = () =>{
    dispatch(changeQuantity(
      {
        productId : productId,
        quantity: quantity +1,
      }
    ))
  }
  return (
    <div
      className={`flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md `}
    >
      <img src={detail.image} alt={detail.name} className="w-12" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className="flex justify-between w-20 gap-1">
        <button className="bg-gray-200 text-black flex justify-center items-center rounded-full w-6 h-6" onClick={handleMinusQuant}>
          -
        </button>
        <span>{quantity}</span>
        <button className="bg-gray-200 text-black flex justify-center items-center rounded-full w-6 h-6" onClick={handlePlusQuant}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
