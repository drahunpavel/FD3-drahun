import React from 'react';
import { render } from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

import './style.css';

var text = "RainbowFrame";
var colors = require('./colors.json');

render(
    <div>
        <RainbowFrame 
            colors = {colors}>
            {text}
        </RainbowFrame>
    </div>,document.getElementById('root')

)