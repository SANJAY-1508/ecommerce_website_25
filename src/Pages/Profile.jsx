import React from "react";
import { Col, Card, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  return (
    <Col lg={12}>
      <h2 className="mb-4">Good morning! sathiya</h2>
      <Card className="border-0 shadow-sm p-4 rounded-4">
        <div className="d-flex justify-content-end">
          <FaEdit className="text-muted cursor-pointer" />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="small text-muted">First name</Form.Label>
              <Form.Control type="text" defaultValue="sathiya" className="bg-light border-0" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="small text-muted">Last name</Form.Label>
              <Form.Control type="text" defaultValue="priya" className="bg-light border-0" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="small text-muted">Email</Form.Label>
              <Form.Control type="email" defaultValue="psanjaykuma77@gmail.com" className="bg-light border-0" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="small text-muted">Contact number</Form.Label>
              <Form.Control type="text" defaultValue="+918248187486" className="bg-light border-0" />
            </Form.Group>
          </Row>

          <Form.Label className="small text-muted">Birthdate</Form.Label>
          <Row className="mb-3">
            <Col><Form.Control placeholder="DD" className="bg-light border-0" /></Col>
            <Col><Form.Control placeholder="MM" className="bg-light border-0" /></Col>
            <Col><Form.Control placeholder="YYYY" className="bg-light border-0" /></Col>
          </Row>

          <Form.Group>
            <Form.Label className="small text-muted d-block">Gender</Form.Label>
            <Form.Check inline label="Male" name="gender" type="radio" />
            <Form.Check inline label="Female" name="gender" type="radio" />
            <Form.Check inline label="Other" name="gender" type="radio" />
          </Form.Group>
        </Form>
      </Card>
    </Col>
  );
};

export default Profile;