import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import RegCompo from "./RegCompo";
import React, { useState } from "react";
import app from "../Firebase/Firebase";
import Form from 'react-bootstrap/Form';
import { isDisabled } from "@testing-library/user-event/dist/utils";
import swal from 'sweetalert';
import { Link } from "react-router-dom";




const Registation = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDesibled, setIsDisabled] = useState(true)

  const auth = getAuth(app);

  const handelRegister = (e) => {
    e.preventDefault();
    
    if ((email, password)) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setError("");
          verifyEmail();
          updateName();
          swal("Registation Successfully!", "Welcome to our services");
          console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    }
  };

  const handelEmail = (e) => {
    const test = /\S+@\S+\.\S+/.test(e.target.value);
    if (!test) {
      setError("Please give valid email");
      return;
    }
    setEmail(e.target.value);
    setError("");
  };

  const handelPassword = (e) => {
    if (!/(?=.{8,})/.test(e.target.value)) {
      setError("Password must be 8 digit");
      return;
    } else if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
      setError("Password should have letter");
      return;
    } else if (!/(?=.*[!#$%@&? "])/.test(e.target.value)) {
      setError("Give spicall chrecter ");
      return;
    }
    setError("");
    setPassword(e.target.value);
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  return (
    <div className="mt-5">
      <h2 className='text-center'>Welcome to Registation</h2>
      <p className="text-danger text-center">{error}</p>
      <form className="w-50 mx-auto">
        <RegCompo place="Full Name" type="text" name="name" required />

        <RegCompo
          btn={handelEmail}
          place="Enter your email"
          type="email"
          name="email"
          required
        />

        <RegCompo
          btn={handelPassword}
          place="New Password"
          type="password"
          name="password"
          required
        />


       <div>
       <Form.Check onClick={()=>!setIsDisabled(!isDesibled)} type="checkbox" label="I agree" />

       </div>
 

        <button disabled={isDesibled} onClick={handelRegister} className="btn btn-info">
          Sign Up
        </button>
        <p>Already have an account <Link to={'/login'}>Login</Link> </p>
      </form>
    </div>
  );
};

export default Registation;
