import React, { Component } from 'react';

class Overview extends Component {
    render() {
        const taskArray = this.props.taskArray;
        return (
            <ul className='Overview'>
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
