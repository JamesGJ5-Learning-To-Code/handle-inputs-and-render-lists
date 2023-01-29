import React, { Component } from 'react';
import TaskLogger from './components/TaskLogger';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskAndIDArray: []
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask(taskString) {
    this.setState((currentState) => ({
      // Unique ID alongside for later mapping while rendering
      taskAndIDArray: currentState.taskAndIDArray.concat([[taskString, uniqid()]])
    }));
  }
  render() {
    return (
      <div className="App">
        <TaskLogger
          onTaskSubmission={this.addTask}
        />
        <Overview
          taskAndIDArray={this.state.taskAndIDArray}
        />
      </div>
    );
  }
}

export default App;