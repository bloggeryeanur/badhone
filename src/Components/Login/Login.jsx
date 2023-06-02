import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import LoginCompo from "./LoginCompo";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase";
import swal from "sweetalert";

const auth = getAuth(app);

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginBtn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSuccess(true);
        console.log(user);
        swal("Here's the title!", "...and here's the text!");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <Form className="w-50 mx-auto mt-5">
        <h2 className="text-center">Login</h2>
        <p className="text-danger">{error}</p>
        {success && <p>Successfully login</p>}

        <LoginCompo
          btn={handelEmail}
          title="Email"
          des="Please Inter Valid Email address"
          place="Enter your mail address"
          type="email"
          name="email"
          required
        />

        <LoginCompo
          btn={handelPassword}
          title="Password"
          des=""
          place="Enter Your Current Password"
          type="password"
          name="password"
          required
        />

        <p>
          Forget your password <button>Forget</button>{" "}
        </p>
        <p>
          Don't Have A Account
          <span>
            <Link to="/registation">Register</Link>
          </span>
        </p>
        <Button onClick={loginBtn} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
