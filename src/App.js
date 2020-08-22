import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 let  nayoks=["jafar Ikbal","Rajjak","Salman","Alomgir "];
  let products=[{name:"Photoshop",price:"22.99"},
  {name:" Illustrator",price:"33.99"}]
 


  return (
    <div className="App">
     <header  className="App-header">
   
      <User></User>
      <Counter></Counter>
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div>
      
     
       <h2>Name:{props.name}</h2>
       <p>Hobby:{props.hobby}</p>
    </div>)
}
function Product(props){
    const productStyle={
      border:"1px solid grey",
      borderRadius:"5px",
      backgroundColor:"lightGray"
      ,height:"350px",
      width:"300px",
      float:"left",
      margin:"30px"
    }
    
  return (
    <div style={productStyle}>
        <h2>{props.name.product}</h2>
        <h1>Price:{props.name.price}</h1> 
        <button>Buy Now</button>
    </div>
  )
}
function Counter(){
  const [count,setCount]=useState(10);
  const handleIncrease=()=>setCount(count+1)
  
  return (
    <div> 
      <h2>count:{count}</h2>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase </button>
    </div>
  )
}
function User(){
  const [user,setUser]=useState([])
  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then (data=>setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic User:{user.length}</h3>
   {
     user.map(user=><li>{user.name}</li>)
   }
    </div>
  )
}
export default App;

// in style first curly bracket for dynamic
// second curly bracket for object
