import React from "react";
import Form from "react-bootstrap/Form";

const LoginCompo = (props) => {
    const {name,type, place,des} = props;
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} placeholder={place}/>
        <Form.Text className="text-muted">
          {des}
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default LoginCompo;
