import AppoinmentList from "./components/AppoinmentList"
import Doctors from "./components/Doctors"
import { useState } from "react";
import { appointmentData } from "./helper/data";

function App() {
  const [appointment,setAppointment]=useState([...appointmentData])
  return (
    <div className="container">
      <h1 className="text-danger text-center mt-4">CLARUS HOSPITAL</h1>
      <Doctors appointment={appointment} setAppointment={setAppointment}/>
      <AppoinmentList appointment={appointment}/>
    </div>
  )
}

export default App
