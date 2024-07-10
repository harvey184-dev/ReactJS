import React, { useState, useEffect } from 'react';

function getTime() {
    return (new Date()).toLocaleTimeString();
}

export default function Time() {
    const [currentTime, setCurrentTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>Current Time</div>
            <h3>{currentTime}</h3>
        </div>
    );
}
