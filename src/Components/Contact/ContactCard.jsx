import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ContactCard = (props) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.img} />
              
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Name : {props.name}</Card.Text>
                <Button variant="primary">Phone : {props.phone}</Button>
              </Card.Body>
            </Card>
        </div>
    );
};

export default ContactCard;