import React from 'react'

const Product = (props) => {
    // like ({title,brand,price,rom,ram,camera,fingerprint})
    // props ko hatana hai toh 
    // curly bracket laga denge usme argumnet laga debge
    // aur props ko hata denge props.model se bhi 

  
  return (
    <div>
    <h3> title = {props.model}</h3>
    <h3> brand = {props.brand}</h3> 
    <h3> price = {props.price}</h3> 
    </div>

  )
}

export default Product