//--- it was in vladilen's video ---//
import React, { Component } from 'react';
//--- it was in vladilen's video ---//
// import React from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center',
        };

        return (
            <div style={divStyle}>
                <h1>Hello12345</h1>

                <Car name={'ford'} year={2018} />
                <Car name="opel" year={2015} />
                <Car name={'mazda'} year={2010} />
            </div>
        );
    }
}

// function App() {
//     const divStyle = {
//         textAlign: 'center',
//     };

//     return (
//         <div style={divStyle}>
//             <h1>Hello12345</h1>
//         </div>
//     );
// }

export default App;
