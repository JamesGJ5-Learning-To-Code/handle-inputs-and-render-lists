import React, { Component } from 'react';
import uniqid from 'uniqid';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.handleDeletion = this.handleDeletion.bind(this);
    }
    handleDeletion(event) {
        const index = parseInt(event.target.getAttribute('dataindex'));
        console.log(index);
        this.props.onTaskDeletion(index);
    }
    render() {
        const taskArray = this.props.taskArray;
        // TODO: consider making task rows into their own component
        return (
            <ul className='Overview' style={{listStyleType: 'none'}}>
                {taskArray.map((taskString, index) => {
                    return(
                        <li
                            key={uniqid()}
                        >
                            {(index + 1).toString() + '. ' + taskString}
                            <button
                                type='button'
                                dataindex={index.toString()}
                                onClick={this.handleDeletion}
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Overview
