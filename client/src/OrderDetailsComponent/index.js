import React from "react";
import { useLocation } from "react-router-dom";

const OrderDetailsComponent = () => {
  const {state} = useLocation();
  const { order } = state
  return (
    <div className="container">
      <div className="center"> 
        <div className="order-category">
          <div className="order-title">Order Number</div>
          <div className="order-subtitle">{order.orderNumber}</div>
        </div>
        <div className="order-category">
          <div className="order-title">Delivery Address</div>
          <div className="order-subtitle">{order.address}</div>
        </div>

        <div className="order-category-div"> 
          <div className="order-category">
            <div className="order-title">Tracking Number</div>
            <div className="order-subtitle">{order.trackingNumber}</div>
          </div>
          <div className="order-category">
            <div className="order-title">Current Status</div>
            <div className="order-subtitle">{order.currentStatus}</div>
          </div>
        </div>

        <div className="order-category-div"> 
          <div className="order-category">
            <div className="order-title">Tracking Number</div>
            <div className="order-subtitle">{order.trackingNumber}</div>
          </div>
          <div className="order-category">
            <div className="order-title">Current Status</div>
            <div className="order-subtitle">{order.currentStatus}</div>
          </div>
        </div>
       
      </div>
    </div>
  )
};

export default OrderDetailsComponent;

