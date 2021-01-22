import React from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: 'Competitive Coding'},
      {id:2, content: 'Security'},
      {id:3, content: 'Java'}
    ]
  }

  delTodo = (id) => {
    console.log(id);
    let newtodos = this.state.todos.filter(todo => {
      return todo.id!==id
    })
    this.setState({
      todos: newtodos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()*10;
    let newtodos = [...this.state.todos, todo]
    this.setState({
      todos: newtodos
    })
  }

  render(){
    return (
      <div className="App container">
        <h1 className="d-flex justify-content-center text-info">Todos</h1>
        <Todos todos={this.state.todos} delTodo={this.delTodo}/>
        <br/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
