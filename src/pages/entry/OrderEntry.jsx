import React from 'react';
import Options from './Options';

function OrderEntry() {
  return (
    <div className="order-entry">
      <h1>Order your sundae</h1>
      <h3>Scoops</h3>
      <Options optionType="scoops" />

      <h3>Toppings</h3>
      <Options optionType="toppings" />
    </div>
  );
}

export default OrderEntry;
