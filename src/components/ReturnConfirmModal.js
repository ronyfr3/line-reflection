import React, { useState, useEffect } from "react";

const ReturnConfirmModal = ({ setOpen4 }) => {
  const [price, setPrice] = useState();

  //get price from localstorage
  useEffect(() => {
    const timer = setInterval(() => {
      setPrice(localStorage.getItem("returnPrice"));
    }, 100);
    return () => clearInterval(timer);
  }, [price]);

  return (
    <div className="confirm_modal_wrapper">
      <h1>Book a product</h1>
      <div className="confirm_info">
        <p>your estimated price is ${price}</p>
        <small> Do you want to proceed?</small>
      </div>
      <button onClick={() => setOpen4(false)}>confirm</button>
    </div>
  );
};

export default ReturnConfirmModal;
