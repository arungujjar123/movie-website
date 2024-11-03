import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0); // Place useState inside the component

  useEffect(() => {
    document.title = counter;
    console.log("use effect is running");
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
};

export default UseEffect;
