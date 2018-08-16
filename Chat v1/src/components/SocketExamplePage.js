import React from 'react';
import PropTypes from 'prop-types';
//import Helmet from 'react-helmet';

import {connect} from 'react-redux';
import * as socketExampleActions from './src/modules/socketexamplemodule';

//import SocketConnectionLog from './src/components/SocketConnectionLog';
//import SocketMessageLog from "./src/components/SocketMessageLog";

@connect(
    state => ({
      loaded: state.socketexample.loaded,
      message: state.socketexample.message,
      connected: state.socketexample.connected}),
    socketExampleActions)
  
  export default class SocketExamplePage extends Component {
    static propTypes = {
      loaded: PropTypes.bool,
      message: PropTypes.string,
      connected: PropTypes.bool
    }
    render() {
      const {loaded, message, connected} = this.props;
      return (
        <div className="container">
          <h1>Socket Exapmle Page</h1>
          <Helmet title="Socket Exapmle Page"/>
          <SocketConnectionLog loaded={loaded} message={message} connected={connected} />
          <SocketMessageLog/>
        </div>
      );
    }
  }