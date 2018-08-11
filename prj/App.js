import React from 'react';
import ReactDOM from 'react-dom';


import ProductsGrid from './src/components/ProductsGrid';


let shopTitle = 'Ishop 3 интернет-магазин';
let tableTitle = require('./src/headtable.json');
let startProducts = require('./src/catalog.json');


ReactDOM.render(
  <ProductsGrid
  shopTitle={shopTitle}
  tableTitle={tableTitle} 
  startProducts={startProducts}
  startCardWorkMode={0}
  />,
  document.getElementById('root')
);