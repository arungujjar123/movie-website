import React from 'react'

const Person = () => {
     // decleartion  of variable
  const name = "superman"
  const age = 30;
// making an object 
const person = {
  name :'arun',
  age:12, 
  gmail:'suman@gmail.com',
  pincode:496440

}

  return (
    <> 
    <div>
     <h1>Name = {person.name}</h1>
     <h1>Name = {person.age}</h1>
     <h1>Name = {person.gmail}</h1>
     <h1>Name = {person.pincode}</h1>
    </div>
    </>
  )
}

export default Person