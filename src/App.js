
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import TableHead from "./components/TableHead/TableHead";
import NavBar from "./components/NavBar/NavBar"
import React, { useState, useEffect, Promise, props } from 'react';
import "./App.css";
import empData from "./utils/empData.json"



function App() {
  const [employees, setEmployees] = useState({
    employeeArr: [],
    filteredEmployees: []
  });

  const onEmployeeSearch = (e) => {

    var newFilteredEmps = []

    var allEmps = empData.results

    console.log(allEmps)
    allEmps.map(function (allEmployees) {
      if (e.target.value === allEmployees.name.first.substring(0, e.target.value.length)) {
        // console.log("there is a match")
        newFilteredEmps.push(allEmployees);
        console.log(newFilteredEmps)
      }
    })

    setEmployees({ ...employees, filteredEmployees: newFilteredEmps })
  }

  var searchResults = employees

  if (employees.filteredEmployees.length > 0) {
    searchResults = employees.filteredEmployees
  }

  const sortByName = () => {
    console.log("sort button working")

  }


  return (
    <div className="App">
      <NavBar employees={employees} onEmployeeSearch={onEmployeeSearch} />
      <input onChange={onEmployeeSearch} className="search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <TableHead sortByName={sortByName} />
      <EmployeeContainer employees={searchResults} />
    </div>
  );
}



export default App
