import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./signup.css";

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btnCreate" onClick={handleShow}>
        <strong>Create New Account</strong>
      </button>

      <Modal
        className="modal"
        backdrop="static"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title>
            Sign Up
            <p className="quick">It's quick and easy.</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="input" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="First name" />
              <Form.Control type="text" placeholder="Surename" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="MobPass"
                type="email"
                placeholder="Mobile number or email adress"
              />
              <Form.Control
                className="MobPass"
                type="password"
                placeholder="New password"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Date of birth</Form.Label>
              <div className="input">
                <Form.Select>
                  <option>01</option>
                </Form.Select>
                <Form.Select>
                  <option>Jan</option>
                </Form.Select>
                <Form.Select>
                  <option>2022</option>
                </Form.Select>
              </div>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Gender</Form.Label>
              <div className="input">
                <Form.Check type="radio" label="Female"></Form.Check>
                <Form.Check type="radio" label="Male"></Form.Check>
                <Form.Check type="radio" label="Custom"></Form.Check>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button className="modalBtnFooter" onClick={handleClose}>
            <strong>Sign Up</strong>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Signup;
