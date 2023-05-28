// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Rules from "../Rules/Rules";

// const Calculate = () => {
//   const [mkt, setMkt] = useState(0)
//   const [meal, setMeal] = useState(0)
//   const [count, setCount] = useState(0)

//   const markge = (event)=>{
//     event.preventDefault()
//     const info = event.target;
//     const mv = info.value;
//     setMkt(mv)
//     info.reset()
//   }
  
//   const meail = (event)=>{
//     event.preventDefault()
//     const info = event.target;
//     const tm = info.value;
//     setMeal(tm)
//     info.reset()
//   }

//   const total = (e)=>{
//     e.preventDefault()
//     const totalCostin = mkt + meal
//     setCount(totalCostin)
//     console.log(totalCostin)
//   }

//   return (
//     <div className="mt-5 ">
//       <h1 className="bg-info text-center">Calculate Meal System</h1>
//      <div className="d-inline-flex">
//       <Form className="w-50 mx-auto">
//         <Row className="mb-3">
          
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Totla Market : </Form.Label>
//         <Form.Control type='number' onSubmit={markge} placeholder='enter valid number of market'/>
//         <Form.Text className="text-muted">
//           Rice,Meet,vagitable and Extra
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Total Meal : </Form.Label>
//         <Form.Control type='number' onSubmit={meail} placeholder='Total Meal Number'/>
//         <Form.Text className="text-muted">
//           Three Flat Meal Number 
//         </Form.Text>
//       </Form.Group>
//         </Row>

//         <Button variant="primary" type="submit" onClick={total}>
//           Submit
//         </Button>
//       </Form>
//       </div>
//       <div className="d-inline-flex justify-content-center">
//         <h1>Meal const : {count}</h1>
//       </div>
//       <Rules />
//     </div>
//   );
// };

// export default Calculate;


import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Rules from "../Rules/Rules";

const Calculate = () => {
  const [mkt, setMkt] = useState(0);
  const [meal, setMeal] = useState(0);
  const [count, setCount] = useState(0);

  const handleMarketChange = (event) => {
    const mv = parseInt(event.target.value);
    setMkt(mv);
  };

  const handleMealChange = (event) => {
    const tm = parseInt(event.target.value);
    setMeal(tm);
  };

  const calculateTotal = (e) => {
    e.preventDefault();
    const totalCost = mkt / meal;
    setCount(totalCost);
  };

  return (
    <div className="mt-5">
      <h1 className="bg-info text-center">Calculate Meal System</h1>
      <div className="d-inline-flex">
        <Form className="w-50 mx-auto">
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Market:</Form.Label>
              <Form.Control
                type="number"
                onChange={handleMarketChange}
                placeholder="Enter valid number of markets"
              />
              <Form.Text className="text-muted">
                Rice, Meat, Vegetable, and Extras
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Meal:</Form.Label>
              <Form.Control
                type="number"
                onChange={handleMealChange}
                placeholder="Total Meal Number"
              />
              <Form.Text className="text-muted">
                Three Flat Meal Number
              </Form.Text>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={calculateTotal}>
            Submit
          </Button>
        </Form>
      </div>
      <div className="d-inline-flex justify-content-center">
        <h1>Meal Cost: {count.toFixed(2)}</h1>
      </div>
      <Rules />
    </div>
  );
};

export default Calculate;