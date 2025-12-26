import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Forms from "../components/Forms";
import { Buttons } from "../components/Button";

const Login = () => {
  // 1. Create a state to track which view to show
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleRequestOtp = () => {
    // 2. Logic to switch the view
    setShowProfileDetails(true);
  };

  return (
    <>
      <section className="py-5 login-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="4" md="8">
              <div className="text-center p-4">
                
                {!showProfileDetails ? (
                  /* --- SCREEN 1: LOGIN WITH OTP --- */
                  <>
                    <h3 className="body-font fw-bold mb-2">Login With OTP</h3>
                    <p className="title-font text-muted mb-4">
                      Please enter your email address
                    </p>

                    <div className="mb-3">
                      <Forms PlaceHolder="Please Enter Your Email ID" />
                    </div>

                    <div className="d-flex align-items-start mb-4 text-start justify-content-center">
                      <input type="checkbox" id="consent" className="mt-1 me-2" />
                      <label htmlFor="consent" style={{ fontSize: "12px", color: "#555", maxWidth: "300px" }}>
                        I agree to receive updates and offers from mastertubes.com via Email.
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                      <div style={{ width: "40%" }}>
                        {/* 3. Add the onClick event here */}
                        <Buttons 
                          label="Request OTP" 
                          className="w-100 py-2" 
                          onClick={handleRequestOtp} 
                        />
                      </div>
                    </div>

                    <p className="text-muted" style={{ fontSize: "11px" }}>
                      A 4 digit OTP will be sent to your email address
                    </p>
                  </>
                ) : (
                  /* --- SCREEN 2: PROFILE DETAILS (Matches your Image) --- */
                  <>
                    <p className="title-font mb-1" style={{ fontSize: "14px" }}>
                      Hello! we just need a few more details
                    </p>
                    <h3 className="body-font fw-bold mb-4">Profile Details</h3>

                    <div className="mb-3 text-start">
                      <label className="fw-bold mb-1" style={{ fontSize: "13px" }}>First name</label>
                      <Forms PlaceHolder="First name" />
                    </div>

                    <div className="mb-3 text-start">
                      <label className="fw-bold mb-1" style={{ fontSize: "13px" }}>Last name</label>
                      <Forms PlaceHolder="Last name" />
                    </div>

                    <div className="mb-3 text-start">
                      <label className="fw-bold mb-1" style={{ fontSize: "13px" }}>Phone number</label>
                      <div className="d-flex align-items-center border rounded px-2" style={{ backgroundColor: "#f2f2f2", height: "45px" }}>
                        <div className="d-flex align-items-center me-2 border-end pe-2">
                           <img src="https://flagcdn.com/w20/in.png" alt="India" className="me-1" />
                           <span style={{ fontSize: "12px" }}>▼</span>
                        </div>
                        <input 
                          type="text" 
                          className="form-control border-0 bg-transparent" 
                          value="9342606037" 
                          readOnly 
                        />
                      </div>
                    </div>

                    <div className="mb-4 text-start">
                      <label className="fw-bold mb-1" style={{ fontSize: "13px" }}>Email</label>
                      <Forms PlaceHolder="Email" />
                    </div>

                    <div className="d-flex justify-content-center">
                      <Buttons 
                        label="Update and sign-in" 
                        className="px-5 py-2" 
                        style={{ backgroundColor: "#ff4d6d", border: "none", color: "white", borderRadius: "5px" }} 
                      />
                    </div>
                  </>
                )}

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;