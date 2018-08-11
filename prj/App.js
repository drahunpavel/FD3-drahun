import React from 'react';
import ReactDOM from 'react-dom';


import News from './src/components/News';


let startArray = require('./src/catalog.json');

ReactDOM.render(
  <News
  startArray={startArray}
  />,
  document.getElementById('root')
);