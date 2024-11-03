import React from "react";

const FilterProduct = () => {
  const product = [
    { id: 1, title: "iphone-16", category: "mobiles", price: 6000 },
    { id: 2, title: "oppoA54", category: "laptop", price: 2454 },
    { id: 3, title: "realme", category: "tablets", price: 4566 },
    { id: 5, title: "gemini", category: "mobiles", price: 87987 },
  ];
  const filterdata = product.filter((data) => data.category == "mobiles");
  console.log(filterdata);
  return (
    <div>
      {filterdata.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterProduct;
