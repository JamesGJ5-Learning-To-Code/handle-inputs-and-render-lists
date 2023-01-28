import React, { Component } from 'react';
import TaskLogger from './components/TaskLogger';

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
      taskArray: currentState.taskArray.concat(taskString)
    }));
  }
  render() {
    return (
      <div className="App">
        <TaskLogger
          onTaskSubmission={this.addTask}
        />
      </div>
    );
  }
}

export default App;
