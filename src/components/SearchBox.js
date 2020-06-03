import React from 'react'



function SearchBox (props) {
    return (

<div className="form-row">
    <div className="form-group col-md-4 offset-md-4">
      <label for="inputEmail4">Search Employee by Name, Cellphone #, or date of birth</label>
      <input type="email" className="form-control" id="inputEmail4" onChange={props.handleChange}/>
    </div>
  </div>
)}

export default SearchBox