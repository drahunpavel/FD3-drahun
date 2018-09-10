import React from 'react';
import ReactDOM from 'react-dom';

import App from "./src/Components/App";

let blank_data = require('./src/file.json');

ReactDOM.render(
    <App
    blank_data={blank_data}
    />,
    document.getElementById('root')
);