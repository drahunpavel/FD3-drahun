import React from 'react';
import ReactDOM from 'react-dom';


import SocketConnectionLog from './src/components/SocketConnectionLog';
import SocketExamplePage from "./src/components/SocketExamplePage";
import SocketMessageLog from "./src/components/SocketMessageLog";





ReactDOM.render(

  <SocketMessageLog />,
  

  document.getElementById('root')
);
