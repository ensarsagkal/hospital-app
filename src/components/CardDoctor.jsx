import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Addmodal from "./Addmodal";

const CardDoctor = ({ data,appointment,setAppointment }) => {

  const [show, setShow] = useState(false);

  const { id, name, dep, img } = data;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} onClick={handleShow} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{dep}</Card.Text>
        </Card.Body>
      </Card>
      {<Addmodal name={name} show={show} handleClose={handleClose} appointment={appointment} setAppointment={setAppointment}  />}
    </div>
  );
};

export default CardDoctor;
