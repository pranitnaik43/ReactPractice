import React from 'react';
import Employees from './Employees'
import AddEmployee from './AddEmployee'

class App extends React.Component{
  state = {
    employees : [
      {id:'1', name:'spirey', role:'Software Engineer', age:'20'},
      {id:'2', name:'rey', role:'Tester', age:'25'},
      {id:'3', name:'john', role:'HR', age:'40'}
    ]
  }

  addEmployee = (employee) => {
    employee.id = Math.random();
    let employees = [...this.state.employees, employee]
    this.setState({
      employees: employees
    });
  }

  deleteEmployee = (id) => {
    // console.log(id);
    let employees = this.state.employees.filter(employee => {
      return id!==employee.id
    })
    this.setState({
      employees: employees
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome everyone</h1>
        <Employees employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
        <AddEmployee addEmployee={this.addEmployee}/>
      </div>
    );
    }
  
}

export default App;
