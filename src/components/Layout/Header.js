import React from 'react'
import { BsFillBellFill,BsFillRecordCircleFill } from "react-icons/bs";
export const Headers = (props) => {
    const {name} = props
  return (
    <>
    <div style={{display:"-webkit-box"}}>
    <p style={{color:"white"}}>{name}</p>
    <BsFillBellFill style={{width:"50",color:"white"}}/>
    <div style={{display:"-webkit-box",color:"white"}}>
    <BsFillRecordCircleFill />
    <p style={{color:"white",paddingLeft:10}}>245</p>
    </div>
   
    </div>
    </>
  )
}
