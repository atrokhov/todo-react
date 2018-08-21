import React, { Component } from 'react';
import {connect} from 'react-redux';
import {tasks} from "../actions";


class ToDo extends Component {
  
  state = {
    text: "",
    updateNoteId: null,
  }

  resetForm = () => {
    this.setState({text: "", updateTaskId: null});
  }

  submitTask = (e) => {
    e.preventDefault();
    if (this.state.updateTaskId === null) {
      this.props.addTask(this.state.text).then(this.resetForm)
    }
    this.resetForm();
  }

  selectForEdit = (id) => {
    let task = this.props.tasks[id];
    this.setState({done: true, updateTaskId: id});
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <h2>Welcome to ToDo!</h2>
        <hr />

        <h3>Add new task</h3>
        <form onSubmit={this.submitTask}>
          <input
            value={this.state.text}
            placeholder="Enter task here..."
            onChange={(e) => this.setState({text: e.target.value})}
            required />
          <button onClick={this.resetForm}>Reset</button>
          <input type="submit" value="Save Task" />
        </form>

        <h3>Tasks</h3>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((task, id) => (
              <tr key={`task_${id}`}>
                <td>{task.text}</td>
                <td>{task.done.toString()}</td>
                <td><button onClick={() => this.selectForEdit(id)}>done</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (text) => {
      return dispatch(tasks.addTask(text));
    },
    updateTask: (id, done) => {
      return dispatch(tasks.updateTask(id, done));
    },
    fetchTasks: () => {
      dispatch(tasks.fetchTasks());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDo);