import React from 'react';
import PropTypes from 'prop-types';

class BlockProductsList extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    };

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td><a href={this.props.url}>Ccылка на фото</a></td>
                <td> {this.props.price}</td>
                <td>{this.props.amount}</td>
            </tr>
        )
    };
};

export default BlockProductsList;