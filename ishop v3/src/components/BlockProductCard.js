import React from 'react';
import PropTypes from 'prop-types';

import './BlockProductCard.css';

class BlockProductCard extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    };

    static defaultProps ={ //значение для новой карты
        name:'',
        price:0,
        url:'',
        amount:0
    }

    render(){
        return(
            <table className="BlockProductCard">
                <tr>
                    <td>
                        <input type="text"
                            defaultValue={this.props.name}
                        />
                    </td>
                    <td>
                        <input type="text"
                            defaultValue={<a href={this.props.url}>Ccылка на фото</a>}
                        />
                    </td>
                    <td>
                        <input type="number"
                            defaultValue={this.props.price}
                        />
                    </td>
                    <td>
                        <input type="number"
                            defaultValue={this.props.amount}
                        />
                    </td>
                </tr>
            </table>
        )
    }
};

export default BlockProductCard;