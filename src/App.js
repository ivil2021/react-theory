// import logo from './logo.svg';
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
        null, // набор опций для нашего дива нулл или пустой объект {}
        React.createElement('h1', null, 'hello world') // дети, вложенные в див
    );
}

export default App;
