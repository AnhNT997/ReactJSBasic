import React from 'react';
import AddTodo from './AddTodo';
class ListTodo extends React.Component {
    state = {
        todos: [
            { id: 1, name: `Học bài`, description: 'học tập và rèn luyện' },
            { id: 2, name: `Uống thuốc`, description: 'Uống thuốc đúng giờ' },
            { id: 3, name: `Thể dục`, description: 'Tập thể dục thể thao' },
            { id: 4, name: `Chơi game`, description: 'chán r thì chơi game' },
        ],
    }
    handleDeleteTask = (task) => {
        let todoList = this.state.todos;
        todoList = todoList.filter((item)=>{return item && task.id !== item.id});
        console.log(todoList)
        this.setState ({
            todos: todoList
        })
    }
    handelAddTask = (task) => {
        let todoList = this.state.todos;
        todoList.push(task);
        console.log(todoList)
        this.setState ({
            todos: todoList
        })
    }
    render() {
        let todos = this.state.todos;
        return (
            <>
                <AddTodo addTask={this.handelAddTask}></AddTodo>
                {
                    todos.map((item,index) => {
                        return (
                            <div key={item.id}>
                                <span>
                                    Task name: {item.name} - Description: {item.description} 
                                </span> &nbsp;
                                <span onClick={()=>{this.handleDeleteTask(item)}}>x</span>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default ListTodo;