import React, { useRef, useEffect } from "react";
import CartTab from "./CartTab";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartTab } from "../features/Cart";

const Layout = () => {
  const cartTabRef = useRef(null);
  const CartTabStatus = useSelector((store) => store.cart.CartTabStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!CartTabStatus) return;

    const handleClickOutside = (event) => {
      if (
        cartTabRef.current &&
        !cartTabRef.current.contains(event.target)
      ) {
        dispatch(toggleCartTab());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [CartTabStatus, dispatch]);

  return (
    <div className="bg-gray-300/50 pb-4">
      <main>
        <Header />
        <Outlet />
      </main>
      {/* Only attach ref and overlay when cart is open */}
      {CartTabStatus && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(0,0,0,0.15)",
          }}
        />
      )}
      <div ref={cartTabRef} style={{ position: "relative", zIndex: 50 }}>
        <CartTab />
      </div>
    </div>
  );
};

export default Layout;
