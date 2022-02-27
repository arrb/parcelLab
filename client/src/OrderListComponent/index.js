import React from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const OrderListComponent = () => {
  const {state} = useLocation();
  const { orderList, filteredArr } = state
  const navigate = useNavigate();

  const showDetails = (order) => {
    // We need to just return duplicates 
    // because we want a more detailed view for the next screen
    const filteredElements = orderList.filter(e => e.orderNo === order.orderNo)
    console.log(filteredElements)
    navigate("/orderdetails", { state: { order: filteredElements } })
  }

  const renderOrder = (order, index) => {
    return(
      <div onClick={() => showDetails(order)} className="order-category-div" key={index}> 
        <div className="order-category left">
          <div className="order-title">Order Number</div>
          <div className="order-subtitle">{order.orderNo}</div>
        </div>
        <div className="order-category left">
          <div className="order-title">Delivery Address</div>
          <div className="order-subtitle">{`${order.street} ${order.zip_code}, ${order.city}`}</div>
        </div>
        <div className="order-category right">
          <div className="order-title">Current Status</div>
          <div className="order-subtitle">{order.status_text}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="center"> 
        <h5>Your Orders</h5>
        {
          filteredArr.map((order, index) => {
            return renderOrder(order, index)
          })
        }
      </div>
    </div>
  )
}

export default OrderListComponent

