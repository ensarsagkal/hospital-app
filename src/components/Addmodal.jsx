import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Addmodal = ({ handleClose, show, name, appointment, setAppointment }) => {
  const { doctorName, appointmentId, patientName, appointmentDate } =
    appointment;
  const handleInput = () => {};

  const handleAppointmenSubmit = (e) => {
    e.preventDefault();

    setAppointment([
      ...appointment,
      {
        id: new Date().getTime(),
        patient: e.target.patient.value,
        day: e.target.appointmentDate.value,
        consulted: false,
        doctor: name,
      },
    ]);

    handleClose();
  };
  // console.log(name);
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
                // onChange={handleInput}
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
                // onChange={handleInput}
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
