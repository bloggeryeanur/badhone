import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import RegCompo from "./RegCompo";

const Registation = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Welcome To Badhone Builders</h1>
      <h3 className="text-center">Sign Up please !</h3>
      <Form className="w-50 mx-auto mt-4">
        <RegCompo
          title="Full Name :"
          place="Enter Your Full Name"
          type="text"
        />

        <RegCompo
          title="Email :"
          place="Enter Your Email Address"
          type="email"
          des="Input your valid email address"
        />

        <RegCompo
          title="Password :"
          place="Enter Password"
          type="text"
          des="At list 8 digit password inter"
        />
        <p>
          Already Have A Account{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>{" "}
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registation;
