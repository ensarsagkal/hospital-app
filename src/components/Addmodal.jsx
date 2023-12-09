import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

const Addmodal = ({ handleClose, show,name ,appointment,setAppointment}) => {
  
  const {doctorName,patientName,appointmentDate}=appointment
  const handleInput=(e)=>{
    setAppointment({...appointment,doctorName:name,[e.target.id]:e.target.value})
  }

  const handleAppointmenSubmit =(e)=>{
    e.preventDefault()
 
    alert("appointment has been saved")
    handleClose()

  }
  // console.log(name);
    return (
    
    <div>
     
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleAppointmenSubmit}>
        <Modal.Header closeButton>
          <Modal.Title><h4 className='text-danger'>Appointment For {name}</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" >
            <Form.Label><p className="fw-bold">Patient Name</p></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleInput}
              id='patientName'
              value={patientName}
              autoFocus
              // required
            />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>
           <p>Date</p>
          </Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={handleInput}
            id='appointmentDate'
            value={appointmentDate}
            
          />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    
    </div>
  );
};

export default Addmodal;
