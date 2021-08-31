import React, { Component } from "react";

class App extends Component {
  
  state={
    todoList : []
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Todo App</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your task."
              autoComplete="off"
              name="todoTask"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success">Add</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {
            this.state.todoList.map(
              (item, index) => {
                return <li className="list-group-item p-1" key={index}>
                  {item}
                  <button className="btn btn-sm btn-outline-danger float-right" onClick={(event) =>{this.deleteTodoTask(event, index)}}>Delete</button>
                </li>;
              }
            )
          }
        </ul>
      </div>
    );
  }

  deleteTodoTask = (event, index) => {
    let taskArray = [...this.state.todoList]
    taskArray.splice(index,1)
    this.setState({todoList:taskArray})
  }

  handleSubmit = (event) => {
    let taskDesc = event.target.elements.todoTask.value;
    if(taskDesc.length > 0){  
      this.setState({
        todoList:[...this.state.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }
}
export default App;
