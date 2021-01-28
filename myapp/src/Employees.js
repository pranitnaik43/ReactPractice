import React from 'react'

const Employees = (props) => {
    const {employees} = props;

    const employeeList = employees.map(employee => {
        return(
            <div className='employee' key={employee.id}>
                <div>Name: {employee.name}</div>
                <div>Age: {employee.age}</div>
                <div>Role: {employee.role}</div>
                <button onClick={() => {props.deleteEmployee(employee.id)}}>Delete</button>
                <br></br>
            </div>
        )
    })
    return (
        employeeList
    )
}

export default Employees