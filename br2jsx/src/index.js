import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

var text = "получает <br>ОДИН <br/>props, <br />содержащий<br> многострочный<br/> текст,<br /> разбитый на строки тегами <br>, <br/> или <br />;";

render(<App>{text}</App>, document.getElementById('root'))