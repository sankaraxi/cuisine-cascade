import React from 'react';
import ReactDOM from 'react-dom';

const jsxElement = <h1 id="heading" className="new" tabIndex="5">Hello World from JSX!</h1>; // 
console.log(jsxElement); //returns object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxElement);