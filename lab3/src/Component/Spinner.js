// src/Component/Spinner.js
import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className="spinner">
            <div className="spinner-icon"></div>
            <p>{props.message}</p>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Please accept location request',
};

export default Spinner;
