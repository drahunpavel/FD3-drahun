import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './components/BlockIshop.css';

import Product from './components/ProductsList;
import ProductСard from './components/ProductCard';

class BlockIshop extends React.Component {
    
    
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
        <div className='Shop'>{this.props.shopTitle}</div>
        <table className='productTable'>
          <thead key={this.props.tableTitle.code} className='Title'>
            <tr>
              <td> {this.props.tableTitle.title}</td>
              <td> {this.props.tableTitle.url}</td>
              <td> {this.props.tableTitle.price}</td>
              <td> {this.props.tableTitle.quantity}</td>
              <td>Редактирование</td>
            </tr>
          </thead>
          <tbody className='Products'>
            {this.props.productsArr.map(v =>
              key={v.code}
                num={v.code}
                title={v.title}
                price={v.price}
                url={v.url}
                quantity={v.quantity}
                // cbIsSelectFunc={this.isSelectFunc}
                // cbIsSelected={this.state.isSelected == v.code ? true : false}
                // cbIsCard={this.isCard}
                // cbIsSelected2={this.state.isSelected == v.code ? v.code : null}
              
            )}
          </tbody>
        </table>
        {/* <button className="newButton" onClick={this.isNew}  >Новый товар</button> */}
        {/* {this.state.isSelected ?
          <Card className='card'
            name={this.state.curentCard.name}
            price={this.state.curentCard.price}
            url={this.state.curentCard.url}
            amount={this.state.curentCard.amount}
          /> : null
        } */}
      </div>
    );
};

};

export default BlockIshop;