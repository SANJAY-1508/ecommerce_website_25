import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";

const DeliveryAddress = () => {
  return (
    <div>
      <h2 className="mb-4">Good morning! sathiya</h2>
      <Row className="g-3">
        {/* Add Address Card */}
        <Col md={6}>
          <Card className="h-100 border-dashed text-center d-flex flex-column align-items-center justify-content-center p-4 rounded-4" style={{ border: '1px solid #ddd', minHeight: '220px' }}>
            <div className="text-danger mb-2"><FaPlusCircle size={30} /></div>
            <button className="btn btn-danger btn-sm rounded-pill px-4">Add new address</button>
          </Card>
        </Col>

        {/* Existing Address Card */}
        <Col md={6}>
          <Card className="h-100 p-4 rounded-4 shadow-sm border-0 position-relative">
            <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1" style={{ fontSize: '10px', borderRadius: '10px 0 10px 0' }}>
              DEFAULT
            </div>
            <div className="text-end text-muted"><FaRegEdit /></div>
            <div className="mt-2" style={{ fontSize: '14px' }}>
              <p className="fw-bold mb-1">SANJAY P</p>
              <p className="mb-0">VIGNESH COLONY</p>
              <p className="mb-0">afdaf</p>
              <p className="mb-0">626001 VIRUDHUNAGAR TN</p>
              <p className="mb-0">India</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DeliveryAddress;