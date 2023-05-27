import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Dark from '../../Image/Dark.jpg';
import Calculate from '../Calculate/Calculate';

const Home = () => {
    
    return (
        <div className='container-fluid'>
            
    <Carousel className=''>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Dark}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Flat Number 301</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Dark}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Flat Number 201</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={Dark}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Flat Number 801</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <Calculate/>
        </div>
    );
};

export default Home;