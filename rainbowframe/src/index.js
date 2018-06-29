import React from 'react'
import { render } from 'react-dom'
import RainbowFrame from './components/RainbowFrame'

//var text = "RainbowFrame";
var colors = require('./colors.json');

render(<RainbowFrame>colors = { colors }</RainbowFrame>, document.getElementById('root'))