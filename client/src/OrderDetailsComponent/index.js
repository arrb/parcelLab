import React from "react";
import { useLocation } from "react-router-dom";

const OrderDetailsComponent = () => {
  const {state} = useLocation();
  const { order } = state
  const { orderNo, street, zip_code, city, status_text, tracking_number, status_details } = order[0]

  console.log("details")
  console.log(order )
  return (
    <div className="container">
      <div className="center"> 
        <div className="order-category">
          <div className="order-title">Order Number</div>
          <div className="order-subtitle">{orderNo}</div>
        </div>
        <div className="order-category">
          <div className="order-title">Delivery Address</div>
          <div className="order-subtitle">{`${street} ${zip_code}, ${city}`}</div>
        </div>

        <div className="order-category-div"> 
          <div className="order-category">
            <div className="order-title">Tracking Number</div>
            <div className="order-subtitle">{tracking_number}</div>
          </div>
          <div className="order-category">
            <div className="order-title">Current Status</div>
            <div className="order-subtitle">{status_text}</div>
            <div className="order-title">{status_details}</div>
          </div>
        </div>

        <div className="order-category-div"> 
          <div className="order-category">
            <div className="order-title">Articles</div>
            {
              order.map((or, index) => {return(
                <div key={index} className="article-info">
                  <div className="article-title"><p>{`x ${or.quantity}`}</p></div>
                  <img src={or.articleImageUrl} alt="OrderImage" className="order-image" />
                  <div className="order-name">
                    <div className="product-name">{or.product_name}</div>
                    <div className="article-no">{or.articleNo}</div>
                  </div>
                </div>
              )})
            }
            
          </div>
        </div>
       
      </div>
    </div>
  )
};

export default OrderDetailsComponent;

