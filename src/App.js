import AppoinmentList from "./components/AppoinmentList"
import "./App.css"
import Doctors from "./components/Doctors"
import { useState } from "react";
import { appointmentData } from "./helper/data";

function App() {
  const [appointment,setAppointment]=useState([...appointmentData])
  const handleDelete=(id)=>{
    const filteredList = appointment.filter((item)=> item.id !== id)
    setAppointment(filteredList) 
  }
  const handleDoubleClick = (id) =>{
    const updatedList = appointment.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setAppointment(updatedList);
  }
  return (
    <div className="container">
      <h1 className="text-danger text-center mt-4">CLARUS HOSPITAL</h1>
      <Doctors appointment={appointment} setAppointment={setAppointment}/>
      <AppoinmentList appointment={appointment} handleDelete={handleDelete} 
       handleDoubleClick={handleDoubleClick} />
    </div>
  )
}

export default App
