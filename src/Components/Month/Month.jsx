import React from "react";
import Table from "react-bootstrap/Table";

const Month = () => {
  return (
    <div className="container mt-5">
        <h1 className="text-center">Total market for this month </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Per/kg</th>
            <th>Date</th>
            <th>extra : </th>
            <th>Amount</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rice</td>
            <td>60/kg</td>
            <td>75/Taka</td>
            <td>28</td>
            <td>Yes</td>
            <td>4500/=</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chicken</td>
            <td>30/kg</td>
            <td>210/Taka</td>
            <td>28</td>
            <td>Yes</td>
            <td>630/=</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Oil</td>
            <td>60/kg</td>
            <td>75/Taka</td>
            <td>28</td>
            <td>Yes</td>
            <td>4500/=</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Month;
