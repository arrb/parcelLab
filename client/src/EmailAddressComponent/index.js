import React, {useState} from "react";
import axios from 'axios';
import OrderListComponent  from "../OrderListComponent";

const EmailAddressComponent = () => {

  const [email, setEmail] = useState('');
  const [showOrders, setShowOrders] = useState(false);
  const [orders, setOrderList] = useState([]);

  console.log("hello" + showOrders)

  const clickSubmit = (e) => {
    const fetchData = async () => {
      const result = await axios(
        `/getorder`,
      );
      setOrderList(result.data)
    };
    setEmail(e.target.value)
    fetchData()
    setShowOrders(true)
  }

  if(showOrders){
    return(
      <>
        <OrderListComponent orders={orders}/>
      </>
    )
  }

  return (
    <div className="form-center">
      <form className="square-section" onSubmit={clickSubmit}>
        <h5>Please enter your email address to see your recent orders</h5>
        <label>Email</label>
        <input type="email" name="email" placeholder="example@example.com"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )

};

export default EmailAddressComponent;

