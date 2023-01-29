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
  }
  addTask(taskString) {
    this.setState((currentState) => ({
      // Unique ID alongside for later mapping while rendering
      taskArray: currentState.taskArray.concat(taskString)
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
        />
      </div>
    );
  }
}

export default App;