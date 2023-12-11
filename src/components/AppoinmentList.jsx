import React from 'react'

const AppoinmentList = ({appointment}) => {
   
  return (
    <div>
   {appointment.map((item,index)=>(
    <div key={index}>{item.patient}</div>
   ))}
   </div>
  )
}

export default AppoinmentList