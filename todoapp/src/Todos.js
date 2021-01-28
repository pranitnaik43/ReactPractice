import React from 'react'

const Todos = (props) => {
    const {todos, delTodo} = props;

    const todosList = todos.length ? (todos.map(todo => {
        return (
            <div className="list-group-item" key={todo.id}>
                <div onClick={() => {delTodo(todo.id)}}>{todo.content}</div>
            </div> 
        )
    })) : (<p className="list-group-item d-flex justify-content-center">You have no Todos Left</p>)
    
    return (
        <div className="todos list-group">
            {todosList}
        </div>
    )
}

export default Todos;