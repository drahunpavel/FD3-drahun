import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends Component {
    static propTypes = {
        colors: PropTypes.array
    }

    render() {
        let colors = this.props.colors;
        console.log("colors: "+colors);

        let children = this.props.children;
        console.log("children: "+ children);


        for (let i=0; i<colors.length; i++) {
            children = <div style={{ border: "solid 1px " + (colors[i]), padding: "3px" }}>
                {console.log(children)}
                {children}
            </div>
        }
        return children
    }
}
export default RainbowFrame;