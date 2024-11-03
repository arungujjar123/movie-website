import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(100);
  const [Product, setProduct] = useState(1000);
  const increaseby1 = () => {
    // counter++;
    setcounter(counter + 1);
    console.log("counter = ", counter);
  };

  const decreaseby1 = () => {
    // counter--;
    setcounter(counter - 1);
    console.log("counter = ", counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseby1}>increase</button>
      <button onClick={decreaseby1}>decrease</button>
    </div>
  );
};

export default Counter;
