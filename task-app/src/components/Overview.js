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
        // else {
        //     this.handleResubmission(event);
        // }
    }
    enableResubmission(event) {
        this.markActive(event);
        event.target.textContent = 'Resubmit'
    }
    markActive(event) {
        event.target.classList.add('active');
    }
    // handleResubmission(event) {}
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
