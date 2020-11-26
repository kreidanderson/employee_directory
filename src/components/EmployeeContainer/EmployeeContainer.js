import React from "react";
import { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
import empData from "../../utils/empData.json"
import App from "../../App"

const EmployeeContainer = (props) => {
  console.log(props.employees)


 return (
  <div className="container">
    <div>
    
      {props.employees.map(employee => {
        return (
        <ul className="list-group list-group-horizontal">
          <li style={{width: 100}}className="list-group-item"><img src={employee.picture.thumbnail}></img></li>
          <li style={{width: 250}}className="list-group-item">{employee.name.first}</li>
          <li style={{width: 250}}className="list-group-item">{employee.name.last}</li>
          <li style={{width: 300}}className="list-group-item">{employee.email}</li>
          <li style={{width: 250}}className="list-group-item">{employee.phone}</li>
        </ul>
        )
      })}
    </div>
  </div>
  )
  };

export default EmployeeContainer;
