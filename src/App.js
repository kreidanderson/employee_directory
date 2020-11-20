
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import TableHead from "./components/TableHead/TableHead";
import NavBar from "./components/NavBar/NavBar"
import React, {useState, useEffect} from 'react';
import "./App.css";



      function App() {
        const [employees, setEmployees] = useState({
          employeeArr: [],
          filteredEmployees: []
        });

       

        const onEmployeeSearch = (e) => {
          setEmployees(e.target.value);
          
          
        }

      

        return (
          <div className="App">
            <NavBar employees={employees} onEmployeeSearch={onEmployeeSearch}/>
            <input onChange={onEmployeeSearch} className="search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <TableHead />
            <EmployeeContainer employees={employees}/>
          </div>
        );
      }
    

export default App;
