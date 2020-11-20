import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";

const TableHead = (props) => (
  <div className="container">
    {/* <h1>Employees</h1> */}
    <div>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">Image</li>
        <li className="list-group-item">First Name</li>
        <li className="list-group-item">Last Name</li>
        <li className="list-group-item">Email</li>
        <li className="list-group-item">Phone</li>
      </ul>
    </div>
  </div>
);

export default TableHead;
