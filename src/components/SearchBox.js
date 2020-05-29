import React from 'react'



function SearchBox () {
    return (

<div className="form-row" className="center">
    <div className="form-group col-md-4">
     <label for="inputEmail4">Search Employee by Name</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    
    <button type="button" class="btn btn-primary">Search</button>
    </div>
  </div>
)}

export default SearchBox