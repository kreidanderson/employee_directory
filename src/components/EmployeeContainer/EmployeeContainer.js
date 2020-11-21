import React from "react";
import { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./style.css";
import empData from "../../utils/empData.json"
import App from "../../App"

const EmployeeContainer = (props) => {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
      setEmployees(empData.results);
  });

  // setEmployees(empData.results);
  // console.log(empData.results[0].email)

 return (
  <div className="container">
    <div>
      {/* below this I will need to do a map loop to show all of the employees */}
      {employees.map(employee => {
        return (
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item"><img src={employee.picture.thumbnail}></img></li>
          <li className="list-group-item">{employee.name.first}</li>
          <li className="list-group-item">{employee.name.last}</li>
          <li className="list-group-item">{employee.email}</li>
          <li className="list-group-item">{employee.phone}</li>
        </ul>
        )
      })}
    </div>
  </div>
  )
  };

export default EmployeeContainer;
