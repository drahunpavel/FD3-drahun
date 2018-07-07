import React from 'react';
import PropTypes from 'prop-types';


import './BlockIshop.css';

import BlockProductsList from './BlockProductsList';
import BlockProductCard from './BlockProductCard';


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
          amount: PropTypes.string.isRequired,
        })
      };

      state = {
        isSelected: '', //выбранное поле
        curentCard: '', //карта выбранного продукта
      };

      isSelectFunc = (cb) => {//функция выбора поля
        console.log(cb);
        this.setState({ isSelected: cb });
      };

      deleteProduct = (deleteCode) => {
        this.state.productsArray.forEach( (item, index) => { 
            if (deleteCode == item.code)
                this.setstate.productsArray.splice(index, 1);
        });
    }  

      addNewProduct = (EO) => {
        EO.stopPropagation();
        console.log(EO.currentTarget);
      };

      isCard = (hash) => {
        console.log(hash);
        this.setState({ curentCard: hash });
      };

 

render(){
    return (

      <div>
      <div className='shopTitle'>{this.props.shopTitle}</div>
      <table>
        <thead key={this.props.tableTitle.code} className='tableHead'>
          <tr>
            <td> {this.props.tableTitle.name}</td>
            <td> {this.props.tableTitle.url}</td>            
            <td> {this.props.tableTitle.price}</td>
            <td> {this.props.tableTitle.amount}</td>
            <td> Управление </td>
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

                cbDeleteProduct = {this.deleteProduct}

                cbIsSelectFunc={this.isSelectFunc}
                cbIsSelected={this.state.isSelected == v.code ? true : false} //проверка на выбранное состояние по code//подсветка
                
                
                cbIsCard={this.isCard}
                //cbIsSelected2={this.state.isSelected == v.code ? v.code : null}

              />
            )}
          </tbody>
      </table>
      <button className="newButton" onClick={this.addNewProduct}>Новый товар</button>
        {/* {this.state.isSelected ?
          <BlockProductCard className=''
            name={this.state.curentCard.name}
            price={this.state.curentCard.price}
            url={this.state.curentCard.url}
            amount={this.state.curentCard.amount}
          /> :  null     

        } */}

    </div>
    );
};

};

export default BlockIshop;