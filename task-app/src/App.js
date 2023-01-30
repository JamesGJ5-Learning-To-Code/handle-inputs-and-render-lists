import React, { Component } from 'react';
import TaskLogger from './components/TaskLogger';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: []
    };
    this.appendTask = this.appendTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  appendTask(taskString) {
    this.insertTask(taskString, this.state.taskArray.length, false);
  }
  editTask(newTaskString, index) {
    this.insertTask(newTaskString, index, true);
  }
  insertTask(taskString, newIndex, replace) {
    // replace is true if the taskString initially at index position newIndex is to be replaced, false if it is not to be
    this.setState((currentState) => ({
      taskArray: currentState.taskArray.slice(0, newIndex).concat(taskString, currentState.taskArray.slice(newIndex + replace))
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
          onTaskSubmission={this.appendTask}
        />
        <Overview
          taskArray={this.state.taskArray}
          onTaskResubmission={this.editTask}
          onTaskDeletion={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;