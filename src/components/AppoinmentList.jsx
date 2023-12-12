import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppoinmentList = ({appointment}) => {
   
  return (
 <Container>
  <h3>
    Appointment List
  </h3>
  {appointment.map(({id,patient,consulted,doctor,day})=>(
    <div key={id} className={consulted ? "appointments consulted":"appointments"}>
      <Row className='justify-content-between align-items-center'>
        <Col>
        <h4>{patient}</h4>
        <h4>{doctor}</h4>
        </Col>
         <Col>
        <h5>Date:{new Date(day).toLocaleDateString("tr")}</h5>
        <h5>Time:{new Date(day).toLocaleTimeString("tr")}</h5>
        </Col> 
        <Col className='text-end'>
        <TiDelete className='text-danger fs-1' type='button'/>
        </Col>
      </Row>
    </div>
  ))}
 </Container>
  )
}

export default AppoinmentList