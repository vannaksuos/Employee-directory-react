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
      if(employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()))
      return true;
      else return false;
    })
    setFilterEmployees(foundEmployees)
  }

useEffect(()=> {
  axios.get('https://randomuser.me/api/?results=50').then(function(response) {
    console.log(response)
    setEmployees(response.data.results);
    setFilterEmployees(response.data.results);
  })
}, []) 
  
  return (
    <div className="App">
<JumboTron/>
<SearchBox handleChange = {handleChange}/>
<Table employees = {employees} filterEmployees = {filterEmployees} />
    </div>
  );
}














export default App;
