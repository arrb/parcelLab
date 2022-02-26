import React from "react";
import { useNavigate } from "react-router-dom";

const EmailAddressComponent = () => {
  const navigate = useNavigate();

  const clickSubmit = (e) => {
    e.preventDefault();
    navigate("/orderlist", { state: { email: e.target.email.value } });
  } 

  return (
    <div className="form-center">
      <form className="square-section" onSubmit={clickSubmit} >
        <h5>Please enter your email address to see your recent orders</h5>
        <label>Email</label>
        <input type="email" name="email" placeholder="example@example.com"/>
        <input type="submit" value="Send"/>
      </form>
    </div>
  )

};

export default EmailAddressComponent;

