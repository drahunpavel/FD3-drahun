import React from 'react';
import PropTypes from 'prop-types';


import './BlockIshop.css';

import BlockProductsList from './BlockProductsList';

class BlockIshop extends React.Component{

    static propTypes = {
        productsArr: PropTypes.arrayOf(
          PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
          })
        ),
        tableTitle: PropTypes.shape({
          code: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
        })
      };



render(){
    return (

      <div>
      <div className='shopTitle'>{this.props.shopTitle}</div>
      <table>
        <thead key={this.props.tableTitle.code} className='tableHead'>
          <tr>
            <td> {this.props.tableTitle.name}</td>
            <td> {this.props.tableTitle.price}</td>
            <td> {this.props.tableTitle.url}</td>
            <td>{this.props.tableTitle.amount}</td>
          </tr>
        </thead>
        <tbody className=''>
        {this.props.productsArray.map(v =>
              <BlockProductsList 
                key={v.code}
                num={v.code}
                name={v.name}
                price={v.price}
                url={v.url}
                amount={v.amount}
              />
            )}
          </tbody>
      </table>
    </div>
    );
};

};

export default BlockIshop;