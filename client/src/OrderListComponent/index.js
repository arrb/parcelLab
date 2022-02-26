import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderListComponent = () => {
  const {state} = useLocation();
  const { email } = state
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDogs();
  }, []);
  
  const fetchDogs = async () => {
    try {
      const result = await axios(
        `/getorder`, {params: {email}}
      );
      setOrderList(result.data);
    } catch (error) {
      console.log("error")
    }
  };

  const showDetails = (order) => {
    console.log(order)
    navigate("/orderdetails", { state: { order } });
  }

  const renderOrder = (order, index) => {
    return(
      <div onClick={() => showDetails(order)} className="order-category-div" key={index}> 
        <div className="order-category left">
          <div className="order-title">Order Number</div>
          <div className="order-subtitle">{order.orderNumber}</div>
        </div>
        <div className="order-category left">
          <div className="order-title">Delivery Address</div>
          <div className="order-subtitle">{order.address}</div>
        </div>
        <div className="order-category right">
          <div className="order-title">Current Status</div>
          <div className="order-subtitle">{order.currentStatus}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="center"> 
        <h5>Your Orders</h5>
        {
          orderList.map((order, index) => {
            return renderOrder(order, index)
          })
        }
      </div>
    </div>
  )
};

export default OrderListComponent;

