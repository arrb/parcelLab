import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";// import NotFound from '../pages/NotFound'
// <Route path="*" element={<NotFound/>}/>
import "./App.css";
import EmailAddressComponent from "./EmailAddressComponent/";
import NavBar from "./NavBar/";


const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<EmailAddressComponent/>}/>
        <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>

  )
  // return (
  //   <Router>
  //     <Link to="/">Dogs</Link>
  //     <Routes>
  //       <Route exact path="/" element={<EmailAddressComponent/>}/>
  //     </Routes>
  //   </Router>
  // );

};

export default App;

function About() {
  return <h2>About</h2>;
}

function Home() {
  return <h2>Home</h2>;
}
