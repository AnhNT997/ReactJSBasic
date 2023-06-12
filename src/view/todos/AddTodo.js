import React from 'react';
class AddTodo extends React.Component {
    state = {
        id:'',
        name: '',
        description: '',
    }
    handleAddTodo = (event) => {
        event.preventDefault();
        if (this.state.taskName === '' || this.state.taskDescription === '') {
            alert(this.state.taskName === '' ? "Please input task name" : "Please input task description");
        }
        else{
            let id  = Math.floor(Math.random() * 10001);
            this.setState({id: id});
            this.props.addTask(this.state);
            this.setState({ name: '', description: '' });
        }        
    }
    handleOnchangeTaskName = (event) => {
        let taskName = event.target.value;
        this.setState({ name: taskName });
    }
    handleOnchangeTaskDescription = (event) => {
        let taskDescription = event.target.value;
        this.setState({ description: taskDescription });
    }
    render() {
        return (
            <>
                <form>
                    <div>
                        <label>Task name: </label>
                        <input type="text" onChange={(event) => this.handleOnchangeTaskName(event)} value={this.state.name} />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="text" onChange={(event) => this.handleOnchangeTaskDescription(event)} value={this.state.description} />
                    </div>
                    <button onClick={(event) => this.handleAddTodo(event)}>Submit</button>
                </form>
            </>
        );
    }
}

export default AddTodo;