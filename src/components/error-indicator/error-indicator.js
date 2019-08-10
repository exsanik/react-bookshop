import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className = "cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div className="inner cover text-center">
                <h1 className="cover-heading">Oops there is an error happened</h1>
                <p className="lead">Don't worry :) We've already started to fix it!</p>
            </div>
        </div>
    );
}

export default ErrorIndicator;