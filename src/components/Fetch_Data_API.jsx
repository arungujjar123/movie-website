import React, { useEffect, useState } from "react";
import UseEffect from "./UseEffect";
const Fetch_Data_API = () => {
  const [setApidata, setsetApidata] = useState([]);

  const fetchDataFromAPI = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await api.json();
    // setApidata(data);
    console.log("my data = ", data);
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {setApidata.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundColor: "grey",
            margin: "10px",
            border: "2px solid yellow",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Fetch_Data_API;
