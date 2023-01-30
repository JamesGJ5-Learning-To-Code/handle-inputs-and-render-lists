import React, { Component } from 'react';
import uniqid from 'uniqid';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
    }
    handleEditButtonClick(event) {
        if (!event.target.classList.contains('active')) {
            this.enableResubmission(event);
        }
        else {
            this.handleResubmission(event);
        }
    }
    enableResubmission(event) {
        this.markActive(event);
        this.enableInput(event);
    }
    markActive(event) {
        event.target.classList.add('active');
        event.target.textContent = 'Resubmit'
    }
    enableInput(event) {
        const li = event.target.closest('li');
        this.appendInputElement(li);
    }
    appendInputElement(parent) {
        const newInput = document.createElement('input');
        newInput.placeholder = 'New task name...';
        parent.appendChild(newInput);
    }
    handleResubmission(event) {
        const newTaskString = this.getNewTaskInput(event).value;
        const taskArrayIndex = parseInt(event.target.getAttribute('data-index'));
        if (newTaskString) {
            this.props.onTaskResubmission(newTaskString, taskArrayIndex);
        }
    }
    getNewTaskInput(event) {
        return event.target.closest('li').querySelector('input')
    }
    handleDeletion(event) {
        const index = parseInt(event.target.getAttribute('data-index'));
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
                            {/* TODO: consider making edit and deletion buttons 
                            into their own components */}
                            <button
                                type='button'
                                data-index={index.toString()}
                                onClick={this.handleEditButtonClick}
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                data-index={index.toString()}
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
