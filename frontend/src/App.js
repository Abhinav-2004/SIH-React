import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddUser from "./pages/AddUser/AddUser";
import UpdateStocks from "./pages/UpdateStocks/UpdateStocks";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/addUser' element={<AddUser/>}/>
          <Route path='/update/stocks' element={<UpdateStocks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
