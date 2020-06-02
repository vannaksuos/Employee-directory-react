import React from 'react'




function Table (props) {

    return(
        <table className="table table-dark">
<thead>
    <tr>
    <th scope="col"> #</th>
    <th scope="col">Full Name</th>
    <th scope="col">Cellphone Number</th>
    <th scope="col">Date of Birth</th>
    </tr>
</thead>
<tbody>
    {props.filterEmployees.map((employee, index) => {
        const dob = new Date(employee.dob.date);
        return (
            <tr>
            <th scope="row">{index + 1}</th>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.cell}</td>
            <td>{dob.toLocaleDateString()}</td>
            </tr>
        )
    })}

</tbody>
</table>
    )
}

export default Table