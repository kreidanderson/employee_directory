import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
import App from "../../App"

const TableHead = (props) => (
  <div className="container">
    {/* <h1>Employees</h1> */}
    <div>
      <ul className="list-group list-group-horizontal">
        <li style={{width: 100}}className="list-group-item">Image</li>
        <li style={{width: 250}}className="list-group-item"onClick={props.sortByName}>First Name</li>
        <li style={{width: 250}}className="list-group-item"onClick={props.sortByLastName}>Last Name</li>
        <li style={{width: 300}}className="list-group-item">Email</li>
        <li style={{width: 250}}className="list-group-item">Phone</li>
      </ul>
    </div>
  </div>
);

export default TableHead;
