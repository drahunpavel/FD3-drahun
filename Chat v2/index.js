import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './src/components-style/style.css';
import App from "./src/components/App";

//import registerServiceWorker from './registerServiceWorker'
//import chat from './reducers'

//const store = createStore(chat)

ReactDOM.render(
  //<Provider store={store}>
    <App />,
  //</Provider>,
  document.getElementById('root')
);
//registerServiceWorker()