import React, {useState, useEffect} from "react";

const OrderListComponent = (orders) => {
  console.log("order list ")
  console.log(orders)

  return (
    <div className="form-center">
      <div className="square-section"> 
      <h5>Your Orders</h5>
      <div className="sub-square-section"> 
        <div className="order-category left">
          <div className="order-title">Order number</div>
          <div className="order-subtitle">123</div>
        </div>
        <div className="order-category left">
          <div className="order-title">Order number</div>
          <div className="order-subtitle">234</div>
        </div>
        <div className="order-category right">
          <div className="order-title">Order number</div>
          <div className="order-subtitle">456</div>
        </div>
        
      </div>
      </div>
      
    </div>
  )

};

export default OrderListComponent;

