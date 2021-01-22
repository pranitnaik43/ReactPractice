import React from 'react';

class AddEmployee extends React.Component{
    state = {
        name: null,
        role: null,
        age: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label>Age</label>
                    <input type="text" id="age" onChange={this.handleChange}></input>
                    <label>Role</label>
                    <input type="text" id="role" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEmployee;