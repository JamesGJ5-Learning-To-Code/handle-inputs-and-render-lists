import React, { Component } from 'react';

class TaskLogger extends Component {
    constructor(props) {
        super(props);
        this.taskInput = <input
            type='text'
            className = 'TaskInput'
            placeholder='Type task name...'
        />
        this.handleSubmission = this.handleSubmission.bind(this);
    }
    // TODO: consider making the input a child component and making its value 
    // into state, this state being held by the TaskLogger
    handleSubmission(event) {
        const taskInput = this._getTaskInput(event);
        const taskString = taskInput.value;
        if (taskString) {
            this.props.onTaskSubmission(taskInput.value);
            taskInput.value = '';
        }

    }
    _getTaskInput(event) {
        const taskLoggerDiv = event.target.closest('.TaskLogger');
        return taskLoggerDiv.querySelector('.TaskInput');
    }
    render() {
        return (
            <div className='TaskLogger'>
                {this.taskInput}
                <button
                    type='button'
                    onClick={this.handleSubmission}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default TaskLogger
