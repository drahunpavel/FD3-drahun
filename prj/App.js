import React from 'react';
import ReactDOM from 'react-dom';


import News from './src/components/News';
import TestInput from './src/components/TestInput';


let startArray = require('./src/catalog.json');

ReactDOM.render(
  <div>
    <h3>Новости</h3>
    <TestInput/>
    <News
      startArray={startArray}
    />
  </div>,


  document.getElementById('root')
);