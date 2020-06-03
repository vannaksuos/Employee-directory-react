import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import JumboTron from './components/JumboTron';
import SearchBox from './components/SearchBox';
import Table from './components/Table';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);
  const handleChange = (event) => {
    if(event.target.value === "") {setFilterEmployees(employees) 
      return;}
    const foundEmployees = filterEmployees.filter(employee => {
      if( matchSearch(employee, event))
      return true;
      else return false;
    })
    setFilterEmployees(foundEmployees)
    
  }

function matchSearch (employee, event) {
  
  const dob = new Date(employee.dob.date);

  return employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) ||
  employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()) ||
  employee.cell.includes(event.target.value)||
  dob.toLocaleDateString().includes(event.target.value);
}

useEffect(()=> {
  axios.get('https://randomuser.me/api/?results=50&nat=US').then(function(response) {
    console.log(response)
    setEmployees(response.data.results);
    setFilterEmployees(response.data.results);
  })
}, []);

function onClickSort() {
 if(!filterEmployees) return
  const filter2 = filterEmployees.map(employee => employee)

  filter2.sort(function(a, b) {
    var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  debugger;
  setFilterEmployees(filter2)

}
  
  return (
    <div className="App">
<JumboTron/>
<SearchBox handleChange = {handleChange}/>
<Table employees = {employees} filterEmployees = {filterEmployees} onClickSort ={onClickSort} />

    </div>
  );
}


export default App;
