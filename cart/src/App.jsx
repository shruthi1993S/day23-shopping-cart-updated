import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Shopping from './Components/Shopping'
import Cart from './Components/Cart'

function App() {

 
  // const handleClick=(item)=>{

  //   let isPresent=false
  //   cart.forEach((product)=>{
  //   if(item.id===product.id)
  //     isPresent=true
  //   })
  //   if(isPresent)
  //     return;//if present return

  // setCart([...cart,item])//if not present push to cart
  //     }
     

  return (
    <div>
    <Navbar size={cartCount} ></Navbar>
    <Shopping ></Shopping>
  <Cart></Cart>
   
    
    </div>
  )
}

export default App