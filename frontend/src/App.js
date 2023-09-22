import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tmp, setTmp] = useState("Hello");
  async function getVal() {
    const data = await axios
      .get("http://127.0.0.1:8000/api")
      .then((res) => {
        console.log(res.data);
        setTmp(res.data);
      })
      .catch((err) => {
        console.log("aditya");
        console.log(err);
      });
  }
  useEffect(() => {
    getVal();
  }, []);

  return (
    <div className="App">
      <h1>{tmp}</h1>
    </div>
  );
}

export default App;
