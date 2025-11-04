import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";
import AllProducts from './Components/AllProducts';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
// import Cradit from "./Components/Cradit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} /> 
        {/* <Route path="/cradit" element={<Cradit />} />  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
