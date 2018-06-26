import React, {Component}  from 'react';
import PropTypes from 'prop-types';

class App extends Component {

    propTypes = {
        text: PropTypes.string.isRequired,
    };


    render() {
        console.log(this.props)
        console.log(this.props.children.split('<br />').join('\n'))
        return (
            <div>
                <h1>ffhg</h1>
                {/* {this.props.children.split('<br />').join('\n')} */}
                {this.props.children}
            </div>
        )
    }
}

export default App;