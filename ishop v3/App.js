import React from 'react';
import ReactDOM from 'react-dom';


import BlockIshop from './src/components/BlockIshop';


let shopTitle = 'Ishop 3 интернет-магазин';
let tableTitle = require('./src/headtable.json');
let productsArray = require('./src/catalog.json');


ReactDOM.render(
  <BlockIshop
  shopTitle={shopTitle}
  tableTitle={tableTitle} 
  productsArray={productsArray}
  />,
  document.getElementById('root')
);