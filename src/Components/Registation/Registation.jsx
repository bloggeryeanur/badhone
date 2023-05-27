import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Registation = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Welcome To Badhone Builders</h1>
      <h3 className="text-center">Sign Up please !</h3>
      <Form className="w-50 mx-auto mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number </Form.Label>
          <Form.Control type="number" placeholder="Number please" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Flat 201" />
          <Form.Check type="checkbox" label="Flat 801" />
          <Form.Check type="checkbox" label="Flat 301" />
        </Form.Group>

    
        <p>Already Have A Account <span><a href="/login">Login</a></span> </p>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registation;
