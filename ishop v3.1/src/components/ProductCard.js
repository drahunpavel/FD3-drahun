import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {

    static propTypes = {
        workMode: PropTypes.number,
        //selectedProductId: PropTypes.number,
    }

    state = {
        //selectedProductId:this.props.selectedProductId,
    }

    saveCardProduct = (EO) => {
        EO.stopPropagation();
        this.props.cbSaveCardProduct(this.props);
    }

    closeCardProduct = (EO) => {
        EO.stopPropagation();
        this.props.cbCloseCardProduct();
    }

    editProductName = (EO) => {
        this.props.cbEditProductName(EO.target.value);
        //console.log(EO.target.value)//получаем изменненое значение через событие onChange 
    }
    editProductUrl = (EO) => {
        this.props.cbEditProductUrl(EO.target.value);
    }
    editProductPrice = (EO) => {
        this.props.cbEditProductPrice(EO.target.value);
    }
    editProductAmount = (EO) => {
        this.props.cbEditProductAmount(EO.target.value);
    }

    render() {
        //console.log(this.props.cardProductId)

        return (

            <div>
                {(this.props.workMode == 1) &&

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
                                    defaultValue={this.props.products[this.props.selectedProductId - 1].name}
                                //onChange={this.editProductName}//
                                />
                            </li>
                            <li>
                                <input type="text"
                                    placeholder='url'
                                    defaultValue={this.props.products[this.props.selectedProductId - 1].url}
                                // onChange={this.editProductUrl}
                                />
                            </li>
                            <li>
                                <input type="number"
                                    placeholder='Стоимость продукта'
                                    defaultValue={this.props.products[this.props.selectedProductId - 1].price}
                                //onChange={this.editProductPrice}
                                />
                            </li>
                            <li>
                                <input type="number"
                                    placeholder='количество'
                                    defaultValue={this.props.products[this.props.selectedProductId - 1].amount}
                                //onChange={this.editProductAmount}
                                />
                            </li>
                            <li>
                                <button className="" onClick={this.saveCardProduct} disabled={this.props.errorCondition}>Сохранить</button>
                                &nbsp;
                        <button className="" onClick={this.closeCardProduct}>Отмена</button>
                            </li>
                        </form>

                    </div>
                }
                {(this.props.workMode == 3) &&
                    <div>

                        <li>
                            <input type="text"
                                onChange={this.editProductName}
                            />
                        </li>

                        <li>
                            <input type="text"
                            onChange={this.editProductUrl}
                            />
                        </li>
                        <li>
                            <input type="number"
                            onChange={this.editProductPrice}
                            />
                        </li>
                        <li>
                            <input type="number"
                            onChange={this.editProductAmount}
                            />
                        </li>
                        <li>
                            <button className="" onClick={this.saveCardProduct} /*disabled={this.props.errorCondition}*/>Сохранить</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Отмена</button>
                        </li>

                    </div>
                }
            </div>
        )

    }

}

export default ProductCard;