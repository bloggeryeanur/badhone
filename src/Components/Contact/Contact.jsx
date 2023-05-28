import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import badhone from '../../Image/301/badhone.png';
import yeanur from '../../Image/301/yeanur.png';
import chape from '../../Image/301/chape.jpeg'
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="text-center mt-5">
      <Container>
        <h1>Contact Us</h1>
        <Row>
          <Col>
            <ContactCard 
            name='Badhone Khan' 
            title='Manager'
            phone= '01841 - 86 54 28'
            img={badhone}
            />
          </Col> 

         
          <Col>
            <ContactCard
            name='Yeanur Rahman'
            title='Ass-Manager'
            phone='01637862658 (WhatsApps)'
            img={yeanur}
            />
          </Col>

          
          <Col>
            <ContactCard
            name='Kathal Rani' 
            title='Shape'
            phone= '01841 - 86 54 28'
            img={chape}
            />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
