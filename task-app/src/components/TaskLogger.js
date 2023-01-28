import React, { Component } from 'react';

class TaskLogger extends Component {
    constructor(props) {
        super(props);
        this.taskInput = <input
            type='text'
            placeholder='Type task name...'
        />
    }
    render() {
        return (
            <div className='TaskLogger'>
                {this.taskInput}
            </div>
        )
    }
}

export default TaskLogger
