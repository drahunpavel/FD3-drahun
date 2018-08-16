import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

//import * as socketExampleActions from './src/modules/socketexamplemodule';
//import SocketMessageLog from "./src/components/SocketMessageLog";

class SocketExamplePage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Socket Exapmle Page</h1>
                {/* <Helmet title="Socket Exapmle Page" /> */}
                <p>Sockets not connected</p>
            </div>
        );
    };
};


export default SocketExamplePage;