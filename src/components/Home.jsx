import React from 'react'
import Person from "./Person";
import Product from "./Product";
import { Test } from "./components/Test";
import Person2 from "./components/Person2";
import Laptop from "./Laptop";
import Event from "./components/Event";
import Counter from "./components/Counter";
import FilterProduct from "./components/FilterProduct";
const Home = () => {
  return (
    <div>
     <div>
        {/* <Person /> */}
        {/* <Product  model= "galaxy s24 ultra" brand="samsung"
      price={150000}
    />
      <Product  model= "iphone 12" brand="iphone"
      price={250000}
    />
      <Product  model= "oppo A54" brand="oppo"
      price={150000}
    /> */}
        {/* <Test/> */}

        {/* <h1>web dev mastery,{age} </h1>
    {/* <h2>{name,age}</h2> */}
        {/* <p>age = {age}</p>
    <h3> we are learning react</h3>
    <h1>2+4</h1>
    <h1>{2+4}</h1> */}
        {/* /* curlybracket ke andar hum javascript likh rahe hai
    <p> ram ram bhai sareyane</p> */}
      </div>
      {/* <Person2 title="kamina" model="insaniyat" price={150} />
   <Laptop name = "arun" age={10} /> */}
      {/* <Event /> */}
      {/* <Counter/> */}
      <FilterProduct />
    </div>
  )
}

export default Home