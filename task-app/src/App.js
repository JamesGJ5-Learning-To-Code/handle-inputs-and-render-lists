import React, { Component } from 'react';
import TaskLogger from './components/TaskLogger';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(taskString) {
    this.setState((currentState) => ({
      // Unique ID alongside for later mapping while rendering
      taskArray: currentState.taskArray.concat(taskString)
    }));
  }
  deleteTask(index) {
    this.setState((currentState) => ({
      taskArray: currentState.taskArray.slice(0, index).concat(currentState.taskArray.slice(index + 1))
    }));
  }
  render() {
    return (
      <div className="App">
        <TaskLogger
          onTaskSubmission={this.addTask}
        />
        <Overview
          taskArray={this.state.taskArray}
          onTaskDeletion={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;