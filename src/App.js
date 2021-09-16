// import logo from './logo.svg';
//--- it was in vladilen's video ---//
// import React, { Component } from 'react';
//--- it was in vladilen's video ---//
import React from 'react';
import './App.css';

function App() {
    // return (
    //     <div className="App">
    //         <h1>Hello12345</h1>
    //     </div>
    // );

    return React.createElement(
        'div', // type of the element
        {
            className: 'App',
        },
        // h1 - type, null - options, 'hello world' - content our h1
        React.createElement('h1', null, 'hello world')
    );
}

export default App;
