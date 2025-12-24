import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cm from "../assets/images/category/product.jpeg"
import Accordion from "react-bootstrap/Accordion";
import { DoButton } from "../components/Button";
const ProductDetails = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <img src={Cm} className="img-fluid" />
            </Col>
            <Col lg="6">
             <div className="product-content my-5">
                <div className="body-font py-3">12 CM Piggy Bank</div>
                <div className="price-content title-font">
                    <div className="net-price mx-2"> RS . 300</div>
                    <div className="discounted_price mx-2"> RS.150</div>
                </div>
                <div className="pt-3">
                    <DoButton/>
                </div>
            </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="body-font">Description</Accordion.Header>
                  <Accordion.Body className="title-font">
                    <div className="body-font">Description : </div>Stylish and eco-friendly Piggy Bank / Savings Can made with sturdy cardboard body and metallic lid. Perfect for storing daily savings securely while encouraging a smart saving habit. Compact, lightweight, and easy to use for both kids and adults..
                    <div className="body-font"> Size:</div> 12 cm
                    <div className="body-font">Color Effect:</div> brown
                    <div className="body-font">Material:</div> Hard cardboard sticker with metal 
                    
                    {/* <div className="body-font">Best For:</div> Diwali,
                    Birthdays, Weddings */}
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="1">
                  <Accordion.Header className="body-font">Safety Tips</Accordion.Header>
                  <Accordion.Body className="title-font">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item> */}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
