import React, { Component } from 'react';
import uniqid from 'uniqid';

class Overview extends Component {
    render() {
        const taskArray = this.props.taskArray;
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
                                dataIndex={index.toString()}
                            >
                                asfasfd
                            </button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Overview
