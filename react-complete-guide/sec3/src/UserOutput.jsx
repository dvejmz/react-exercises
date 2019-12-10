import React from 'react';

import './UserOutput.scss';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username</p>
            <p className="UserOutput__username">{props.username}</p>
        </div>

    );
};

export default userOutput;

