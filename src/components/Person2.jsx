import React from 'react'

const Person2 = ({title,model,price}) => {
  return (
    <>
    <div>
    <h1>title={title}</h1>
    <h2>model = {model}</h2>
    <h1> price = {price>1000 ? <h1>'you can donte it to me '</h1>:<h3>you can't donate to us </h3>}</h1>
    </div>
    </>
  )
}

export default Person2