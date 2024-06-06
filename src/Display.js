import React from 'react';
import './Display.css';

const Display = ({ input, previousInput }) => {
    return (
        <div className="display">
            <div className='prevInp'>{previousInput ? previousInput : ""}</div>
            <div>{input}</div>
        </div>
    );
};

export default Display;
