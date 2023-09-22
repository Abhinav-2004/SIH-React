import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleInput from "./pages/singleInput";
import Navbar from "./components/Navbar";

function App() {
  return (<>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleInput />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
