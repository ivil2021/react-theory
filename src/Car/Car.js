import React from 'react';

// next line was used because of the alarm
// eslint-disable-next-line
// export default () => <div>This is Car component</div>;

const car = () => {
    return (
        <div>
            <p>This is Car component</p>
            <p>
                <strong>number: {Math.round(Math.random() * 100)}</strong>
            </p>
        </div>
    );
};

export default car;
