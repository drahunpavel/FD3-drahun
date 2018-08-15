import React from 'react';
import ReactDOM from 'react-dom';


import News from './src/components/News';
import Add from './src/components/Add';


let startArray = require('./src/catalog.json');

ReactDOM.render(
  <div>
    <h3>Новости</h3>
    <Add/>
    <News
      startArray={startArray}
    />
  </div>,


  document.getElementById('root')
);