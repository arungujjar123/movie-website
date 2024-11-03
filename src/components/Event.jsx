import React from "react";

const Event = () => {
  const handleclick = () => {
    alert("you click the button");
  };
  const addition = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <h1>we are learning events</h1>
      <button onClick={handleclick}> click this button</button>
      <button onClick={() => addition(10)}>button 2</button>
    </div>
  );
};

export default Event;
