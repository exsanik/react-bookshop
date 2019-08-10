import React from 'react';

const Spinner = () => {
    return(
        <div className="spinner-grow" style={{width: 4+'rem', height: 4+'rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner;