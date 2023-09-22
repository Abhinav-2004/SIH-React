import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleInput() {
  const [each1, setEach1] = useState("");
  const [no, setNo] = useState("");
  const [tmp, setTmp] = useState({});

  async function getVal() {
    const data = await axios
      .post("http://127.0.0.1:8000/api/", { each1, no })
      .then((res) => {
        console.log(typeof res.data);
        setTmp(JSON.parse(res.data));
      })
      .catch((err) => {
        console.log("aditya");
        console.log(err);
      });
  }
  console.log(tmp);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Enter Train Details</h1>
      <input placeholder="Enter Train No." />
      <input
        placeholder="Enter Each Wagon Capacity"
        onChange={(e) => setEach1(e.target.value)}
      />
      <input
        placeholder="Enter No. of wagons attached"
        onChange={(e) => setNo(e.target.value)}
      />
      <button onClick={() => getVal()}>Get Optimised Route</button>
      <div>
        {tmp.routePoints.map((item) => {
          <p>{item}</p>;
        })}
        <br />
        {tmp.totalCost}
        <br />
        {tmp.weightFull}
      </div>
    </div>
  );
}
