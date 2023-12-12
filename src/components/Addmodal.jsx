import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Addmodal = ({ handleClose, show, name, appointment, setAppointment }) => {
  const { doctorName, appointmentId, patient, day } =
    appointment;
  const [patientName,setPatientName]=useState("")
  const [date,setDate]=useState("")

  const handleAppointmenSubmit = (e) => {
    e.preventDefault();

    setAppointment([
      ...appointment,
      {
        id: new Date().getTime(),
        patient: patientName,
        day:date,
        consulted: false,
        doctor: name,
      },
    ]);

    handleClose();
  };
  // console.log(appointment);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleAppointmenSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 className="text-danger">Appointment For {name}</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                <p className="fw-bold">Patient Name</p>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e)=>setPatientName(e.target.value)}
                id="patient"
                // value={patientName || ""}
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
                onChange={(e)=>setDate(e.target.value)}
                id="appointmentDate"
                // value={appointmentDate || ""}
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
