import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ContactCard = (props) => {
  const { img, title, name, phone } = props;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Name : {name}</Card.Text>
          <Button variant="primary">Phone : {phone}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
