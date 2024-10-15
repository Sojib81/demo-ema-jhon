import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  const totalPrice = cart.reduce(
    (totalPrice, prd) => totalPrice + prd.price,
    0
  );
  let shiping = 0;
  if (totalPrice > 35) {
    shiping = 0;
  } else if (totalPrice > 15) {
    shiping = 4.99;
  } else if (totalPrice > 0) {
    shiping = 0;
  }
  const formatNumber = (num) => {
    const number = num.toFixed(2);
    return Number(number);
  };

  const tax = formatNumber(totalPrice / 10);
  const grandTotal = formatNumber(totalPrice + tax + shiping);

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered :{cart.length}</p>
      <p>Product Price :{formatNumber(totalPrice)}</p>
      <p>
        <small>Shiping Cost: {shiping}</small>
      </p>
      <p>Tax+Vat:{tax}</p>
      <p>Total Price : {grandTotal}</p>
    </div>
  );
};

export default Cart;
