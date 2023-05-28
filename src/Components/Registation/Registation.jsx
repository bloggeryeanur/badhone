import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import RegCompo from "./RegCompo";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase";

const Registation = () => {
  const [user, setUser] = useState(false);
  const [git, setGit] = useState(false);
  const [mail, setMail] = useState(false)

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handelGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(true);
      })
      .then((error) => {
        console.error(error);
      });
  };

  const handelGithub = () => {
    signInWithPopup(auth, gitProvider)
    .then( (result)=>{
      const user = result.user;
      console.log(user)
      setGit(true)
    })
    .then( (error)=>{
      console.error(error)
    })    
  };

  
  const subBtn = (event)=>{
    event.preventDefault();
    const info = event.target;
    const email = info.email.value;
    const password = info.password.value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then( (result)=>{
      const user = result.user;
      console.log(user)
      setMail(true)
      info.reset()

    })
    .then( (error)=>{
      console.log(error)
    })
    
  }


  return (
    <div>
      <h1 className="text-center mt-3">Welcome To Badhone Builders</h1>
      <h3 className="text-center">Sign Up please !</h3>
      <Form onSubmit={subBtn} className="w-50 mx-auto mt-4">
        <RegCompo
          title="Full Name :"
          place="Enter Your Full Name"
          type="text"
          name='name'
        />

        <RegCompo
          title="Email :"
          place="Enter Your Email Address"
          type="email"
          des="Input your valid email address"
          name='email'
        />

        <RegCompo
          title="Password :"
          place="Enter Password"
          type="password"
          des="At list 8 digit password inter"
          name='password'
        />
        {user && <p>Successfully Register with Google !</p>}
        {git && <p>Successfully Register with Github</p> }
        {mail && <p>Successfully Register Email</p> }
        <div className="container">
          <p>
            Login with
            <Button onClick={handelGoogle} className="btn btn-info">
              Google
            </Button>
            or
            <Button onClick={handelGithub} className="btn btn-info">
              Github
            </Button>{" "}
          </p>
        </div>
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
