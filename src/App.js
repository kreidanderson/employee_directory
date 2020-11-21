
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import TableHead from "./components/TableHead/TableHead";
import NavBar from "./components/NavBar/NavBar"
import React, {useState, useEffect, Promise} from 'react';
import "./App.css";
import empData from "./utils/empData.json"



function App() {
  const [employees, setEmployees] = useState({
    employeeArr: [],
    filteredEmployees: []
  });

  useEffect(() => {
    // Fetch data from api
    // fetch("https://randomuser.me/api/?results=50&nat=us")
    //   .then(resp => resp.json())
    //   .then(respJSON => {
    //     setEmployees(respJSON.results);
    //   });

    // setEmployees({...employees, employeeArr: empData})
    // console.log(employees.employeeArr)


  },);



        const onEmployeeSearch = (e) => {
          console.log(e.target.value)
          

          var newFilteredEmps = []
   
              var allEmps = empData.results
              console.log(allEmps)
              allEmps.map(function(allEmployees){
                if (e.target.value === allEmployees.name.first.substring(0,e.target.value.length)){
                  // console.log("there is a match")
                  newFilteredEmps.push(allEmployees);
                  console.log(newFilteredEmps)
                }
              })
           
            
           

            setEmployees({...employees, filteredEmployees: newFilteredEmps })
            

      

        }
      
        var SearchResults = employees
        if(employees.filteredEmployees.length > 0) {
          SearchResults = employees.filteredEmployees 
        }


        return (
          <div className="App">
            <NavBar employees={employees} onEmployeeSearch={onEmployeeSearch}/>
            <input onChange={onEmployeeSearch} className="search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <TableHead />
            <EmployeeContainer employees={SearchResults}/>
          </div>
        );
      }
      
    

export default App
