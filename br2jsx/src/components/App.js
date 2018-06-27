import React, {Component}  from 'react';
import PropTypes from 'prop-types';

class App extends Component {

    
    propTypes = {
        children: PropTypes.string.isRequired,
    };


    render() {
        console.log(this.props)
        console.log(this.props.children.split('<br>'))
        console.log(this.props.children.split('<br>').join('\n'))
        return (
            <div>
                <p>
                    {this.props.children.split('<br>').join('\n')}
                </p>
            </div>
        )
    }
}

export default App;