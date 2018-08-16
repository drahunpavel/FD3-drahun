import React from 'react';
import PropTypes from 'prop-types';

//import {connect} from 'react-redux';

//import * as socketExampleActions from './src/modules/socketexamplemodule';
//import SocketMessageLog from "./src/components/SocketMessageLog";
class SocketConnectionLog extends React.Component{
    render() {
        return (
          <div>
            <h3>Socket connection log</h3>
            <textarea
              className="form-control"
              rows="1"
              readOnly
              placeholder="Waiting ..."
              value="
                index = 2, loaded = true, message = Connected, connected = true
                index = 1, loaded = false, message = Connecting..., connected = false"/>

            <button className="btn btn-primary btn-sm">
              <i className="fa fa-sign-in"/> Connect
            </button>

            <button className="btn btn-danger btn-sm">
              <i className="fa fa-sign-out"/> Disconnect
            </button>
          </div>
        );
    };
};


export default SocketConnectionLog;