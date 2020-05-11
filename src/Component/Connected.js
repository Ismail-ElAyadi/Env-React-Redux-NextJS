import React from 'react';

const Connected = ({userName}) => {
    return (
        <div>
            {userName ? <h1>Welcome {userName}</h1> : <h1>Get a /username in URL</h1>}
        </div>
    );
}

export default Connected;
