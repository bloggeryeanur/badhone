import React from "react";
import Form from "react-bootstrap/Form";

const RegCompo = (props) => {
  const { title, place, type ,des,name, btn} = props;
  return ( 
    <div>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{title}</Form.Label>
          <Form.Control onBlur={btn} name={name} type={type} placeholder={place} />
          <Form.Text className="text-muted">{des}</Form.Text>
        </Form.Group>
    </div>
  );
};

export default RegCompo;
