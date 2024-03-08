import React, { useState } from 'react'
import './button.css'
function Button({text}) {

  
  const[clicked,setClicked]=useState(text)
    const handle=(e)=>{
      if(clicked=='Click Me'){
setClicked("U Clicked On Me")
      }
      else{
        setClicked('Click Me')
      }
    }

  return (
    <>
    <button onClick={handle}>
        {clicked}</button></>
  )
}

export default Button