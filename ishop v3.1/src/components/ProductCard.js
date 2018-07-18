import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {

    static propTypes={
        workMode: PropTypes.number,
        //selectedProductId: PropTypes.number,
    }
    
    state = {
        //selectedProductId:this.props.selectedProductId,
    }

    render() {
        //console.log(this.props.cardProductId)

        return (

            <div>
                {(this.props.workMode==1)&&

                    <div>
                        <table>
                            <tr>
                    <td><p>{this.props.cardProductId[0].name}</p></td>
                    <td><p>{this.props.cardProductId[0].url}</p></td>
                    <td><p>{this.props.cardProductId[0].price}</p></td>
                    <td><p>{this.props.cardProductId[0].amount}</p></td>
                    </tr>
                    </table>
                    </div>

                }
                {(this.props.workMode == 2) &&
                
                <div>
                    <form>
                    <li>
                        <input type="text"
                            placeholder='Название продукта'
                            defaultValue={this.props.products[this.props.selectedProductId-1].name}
                            //onChange={this.editProductName}//
                        />
                    </li>
                    <li>
                        <input type="text"
                            placeholder='url'
                            defaultValue={this.props.products[this.props.selectedProductId-1].url}
                           // onChange={this.editProductUrl}
                        />
                    </li>
                    <li>
                        <input type="number"
                            placeholder='Стоимость продукта'
                            defaultValue={this.props.products[this.props.selectedProductId-1].price}
                            //onChange={this.editProductPrice}
                        />
                    </li>
                    <li>
                        <input type="number"
                            placeholder='количество'
                            defaultValue={this.props.products[this.props.selectedProductId-1].amount}
                            //onChange={this.editProductAmount}
                        />
                    </li>
                    <li>
                        <button className="" onClick={this.saveCardProduct} disabled = {this.props.errorCondition}>Сохранить</button>
                        &nbsp;
                        <button className="" onClick={this.closeCardProduct}>Отмена</button>
                    </li>
                    </form>

                <p>{this.props.products[this.props.selectedProductId-1].name}</p>
                <p>{this.props.products[this.props.selectedProductId-1].url}</p>
                <p>{this.props.products[this.props.selectedProductId-1].price}</p>
                <p>{this.props.products[this.props.selectedProductId-1].amount}</p>
                </div>
            }                
            </div>
        )

    }

}

export default ProductCard;