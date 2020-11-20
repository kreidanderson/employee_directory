
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import TableHead from "./components/TableHead/TableHead";
import NavBar from "./components/NavBar/NavBar"
import React, {useState, useEffect} from 'react';
import axios from "axios";


      function App() {
        // const [employees, setEmployees] = useState([]);

        // const onEmployeeSearch = (searchResults) => {
        //   setEmployees(searchResults);

          
        // }
        return (
          <div className="App">
            <NavBar 
            // employees={employees} onEmployeeSearch={onEmployeeSearch}
            />
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <TableHead />
            <EmployeeContainer 
            // employees={employees}
            />
          </div>
        );
      }
    

export default App;
