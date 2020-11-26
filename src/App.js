
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import TableHead from "./components/TableHead/TableHead";
import NavBar from "./components/NavBar/NavBar"
import React, { useState, useEffect, Promise, props } from 'react';
import "./App.css";
import empData from "./utils/empData.json"



function App() {
  const [employees, setEmployees] = useState(empData.results);

  const [displayEmployees, setDisplayEmployees] = useState(empData.results)

  const onEmployeeSearch = (e) => {
    var newFilteredEmps = [];
    var allEmps = empData.results;

    allEmps.map(function (allEmployees) {
      if (
        e.target.value ===
        allEmployees.name.first.substring(0, e.target.value.length)
      ) {
        newFilteredEmps.push(allEmployees);
        console.log(newFilteredEmps);
      }
    });

    setDisplayEmployees(newFilteredEmps);
  };


  const sortByName = () => {
    let sorted = [...empData.results]
    sorted.sort((a, b) => a.name.first.localeCompare(b.name.first))
    
    setDisplayEmployees(sorted)
  };

  const sortByLastName = () => {
    let sortedLast = [...empData.results]
    sortedLast.sort((a, b) => a.name.last.localeCompare(b.name.last))
    
    setDisplayEmployees(sortedLast)
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
      <input
        style={{width: 1110}}
        onChange={onEmployeeSearch}
        className="search form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      </div>
      <TableHead sortByName={sortByName} sortByLastName={sortByLastName} />
      <EmployeeContainer employees={displayEmployees} />
    </div>
  );
}



export default App
