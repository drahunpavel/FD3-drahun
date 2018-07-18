import React from 'react';
import PropTypes from 'prop-types';

import './BlockProductsList.css';

class BlockProductsList extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,

        cbIsSelectFunc: PropTypes.func.isRequired,
        cbIsSelected: PropTypes.bool.isRequired,

        cbDeleteProduct: PropTypes.func.isRequired,
        cbEditProduct: PropTypes.func.isRequired
    };



    isSelected = (EO) => {
        EO.stopPropagation();
        this.props.cbIsSelectFunc(EO.currentTarget.className, this.props.num, this.props.name, this.props.url, this.props.price, this.props.amount);
    }


    editProduct = (EO) => {
        EO.stopPropagation();//stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают
        //console.log(EO.currentTarget.value);//event.currentTarget используется, когда один и тот же обработчик события присваивается нескольким элементам.
        this.props.cbEditProduct(this.props.num, this.props.name, this.props.url, this.props.price, this.props.amount);
    };

    deleteProduct = (EO) => {
        EO.stopPropagation();
        this.props.cbDeleteProduct(this.props.num, this.props.name);
    };

    render() {
        return (
            <tr className={this.props.cbIsSelected ? this.props.num + ' selected' : this.props.num} onClick={this.isSelected} >
                <td>{this.props.name}</td>
                <td><a href={this.props.url}>Ccылка на фото</a></td>
                <td>{this.props.price}</td>
                <td>{this.props.amount}</td>
                <td>
                    <button className="" onClick={this.editProduct}>Редактировать</button>
                    &nbsp;
                    <button className="" onClick={this.deleteProduct}>Удалить</button>
                </td>
            </tr>
        )
    };
};

export default BlockProductsList;