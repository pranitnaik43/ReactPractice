import React from 'react'

class AddTodo extends React.Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ""
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Todo</label>
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.content}></input>
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }
}

export default AddTodo;