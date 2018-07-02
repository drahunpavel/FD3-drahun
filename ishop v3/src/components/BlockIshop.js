import React from 'react';
import PropTypes from 'prop-types';

import './components/BlockIshop.css';

// import Product from './components/ProductsList;
// import ProductСard from './components/ProductCard';

class BlockIshop extends React.Component{
    
    
    static propTypes = {
        productsArr: PropTypes.arrayOf(
          PropTypes.shape({
            code: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
          })
        ),
        tableTitle: PropTypes.shape({
          code: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          quantity: PropTypes.string.isRequired,
        })
      };


render(){
    return (
        <div>
            <div className=''>{this.props.shopTitle}</div>
        <table className=''>
          <thead key={this.props.tableTitle.code} className='Title'>
            <tr>
              <td> {this.props.tableTitle.title}</td>
              <td> {this.props.tableTitle.url}</td>
              <td> {this.props.tableTitle.price}</td>
              <td> {this.props.tableTitle.quantity}</td>
              <td>Редактирование</td>
            </tr>
          </thead>

        </table> */}


      </div>
    );
};

};

export default BlockIshop;