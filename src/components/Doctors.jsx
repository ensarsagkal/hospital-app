import React from "react";
import { doctorData } from "../helper/data";
import CardDoctor from "./CardDoctor";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Doctors = () => {
  return (
    <Container>
      <h3>Our Doctors</h3>
      <Row className="g-4">
        
        {doctorData.map((data) => (
          <Col key={data.id}>
            <CardDoctor data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
