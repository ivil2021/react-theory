import React from 'react';

const car = (props) => {
    return (
        <div>
            <h3>Car name: {props.name}</h3>
            <p>
                year:<strong> {props.year}</strong>
            </p>
            <button onClick={props.onChangeTitle}>Click</button>
        </div>
    );
};

export default car;
