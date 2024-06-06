import React from 'react';
import './Button.css';

const Button = ({ value, onClick, id }) => {
    return (
        <button className={`button ${id}`} onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default Button;
