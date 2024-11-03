import React from "react";

const Map = () => {
  let product = [
    { id: 1, title: "iphone", price: 15000 },
    { id: 2, title: "iphone-12", price: 12000 },
  ];
  return (
    <div>
      {product.map((data) => {
        <div key={data.id}>
          <h1>title = {data.title}</h1>
          <h2>price = {data.price}</h2>
        </div>;
      })}
    </div>
  );
};

export default Map;
