import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SignIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in form submitted:', { email, password });
    // Add sign-in logic here
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;

