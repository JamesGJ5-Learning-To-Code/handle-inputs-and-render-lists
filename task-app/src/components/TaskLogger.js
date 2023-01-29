import React, { Component } from 'react';

class TaskLogger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingTaskString: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }
    handleChange(event) {
        const newTaskString = event.target.value;
        this.setState({
            pendingTaskString: newTaskString
        });

    }
    handleSubmission(event) {
        const pendingTaskString = this.state.pendingTaskString;
        if (pendingTaskString) {
            this.props.onTaskSubmission(pendingTaskString);
            this.setState({
                pendingTaskString: ''
            })
        }

    }
    render() {
        return (
            <div className='TaskLogger'>
                <input
                    type='text'
                    className = 'TaskInput'
                    value = {this.state.pendingTaskString}
                    placeholder='Type task name...'
                    onChange={this.handleChange}
                />
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
