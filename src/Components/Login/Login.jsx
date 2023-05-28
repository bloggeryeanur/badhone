import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LoginCompo from "./LoginCompo";


const Login = (props) => {



  return (
    <div>
      <Form className="w-50 mx-auto mt-5">
        <h2 className="text-center">Login</h2>

        <LoginCompo
          title="Email"
          des="Please Inter Valid Email address"
          place="Enter your mail address"
          type="email"
          name='email'
        />

        <LoginCompo
          title="Password"
          des=""
          place="Enter Your Current Password"
          type="password"
          name='password'
        />

        <p>
          Don't Have A Account{" "}
          <span>
            <Link to="/registation">Register</Link>
          </span>{" "}
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
