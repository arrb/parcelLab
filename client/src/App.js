import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './NotFound'
import "./App.css";
import EmailAddressComponent from "./EmailAddressComponent/";
import NavBar from "./NavBar/";
import OrderDetailsComponent from "./OrderDetailsComponent";
import OrderListComponent from "./OrderListComponent";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<EmailAddressComponent/>}/>
        <Route path="/orderlist" element={<OrderListComponent />} />
        <Route path="/orderdetails" element={<OrderDetailsComponent />} />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;