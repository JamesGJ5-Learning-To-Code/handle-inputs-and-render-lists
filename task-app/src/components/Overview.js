import React, { Component } from 'react';

class Overview extends Component {
    render() {
        const taskArray = this.props.taskArray;
        return (
            <ul className='Overview'>
                {/* TODO: use uniqid for unique ID's like at
                https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists */}
                {taskArray.map((taskString, index) =>
                    <li key={index.toString()}>
                        {taskString}
                    </li>
                )}
            </ul>
        );
    }
}

export default Overview
