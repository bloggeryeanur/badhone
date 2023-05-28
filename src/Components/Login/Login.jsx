import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LoginCompo from "./LoginCompo";
import {getAuth} from 'firebase/auth';
import app from '../Firebase/Firebase';


const auth = getAuth(app)

const Login = (props) => {
  const [user, setUser] = useState(false)

  const loginBtn = (event)=>{
    event.preventDefault();
    const info = event.target;

    const email = info.email.value;
    const password = info.password.value;

    
    

  }




  return (
    <div>
      <Form onSubmit={loginBtn} className="w-50 mx-auto mt-5">
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
