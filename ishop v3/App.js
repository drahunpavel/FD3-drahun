import React from 'react';
import { render } from 'react-dom';

import BlockIshop from './components/BlockIshop';

let shopTitle="Ishop 3";
let tableTitle=require('./src/headtable.json');
let productsArr=require('./src/catalog.json');

render(
    <BlockIshop
        shopTitle={shopTitle}
        tableTitle={tableTitle}
        productsArr={productsArr}
    />,
document.getElementById('root')
)