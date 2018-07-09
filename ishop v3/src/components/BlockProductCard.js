import React from 'react';
import PropTypes from 'prop-types';

import './BlockProductCard.css';

class BlockProductCard extends React.Component {

    static propTypes = {
            num: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            url: PropTypes.string,
            amount: PropTypes.number,

        workMode: PropTypes.number,

        // editCard: PropTypes.shape({
        //     num: PropTypes.number.isRequired,
        //     name: PropTypes.string.isRequired,
        //     price: PropTypes.number.isRequired,
        //     url: PropTypes.string.isRequired,
        //     amount: PropTypes.number.isRequired,
        //   }),


        cbEditProductName: PropTypes.func.isRequired,
        cbEditProductUrl: PropTypes.func.isRequired,
        cbEditProductPrice: PropTypes.func.isRequired,
        cbEditProductAmount: PropTypes.func.isRequired,

        cbSaveCardProduct: PropTypes.func.isRequired,
        cbCloseCardProduct: PropTypes.func.isRequired,

        errorCondition: PropTypes.bool.isRequired
    };


    editProductName = (EO) => {
        this.props.cbEditProductName(EO.target.value);//получаем изменненое значение через событие onChange 
    }
    editProductUrl = (EO) => {
        this.props.cbEditProductUrl(EO.target.value);
    }
    editProductPrice = (EO) => {
        //console.log(EO.target.value);
        this.props.cbEditProductPrice(EO.target.value);
    }
    editProductAmount = (EO) => {
        this.props.cbEditProductAmount(EO.target.value);
    }



    saveCardProduct = (EO) => {
        EO.stopPropagation();
        this.props.cbSaveCardProduct(this.props);
    }
    closeCardProduct = (EO) => {
        EO.stopPropagation();
        this.props.cbCloseCardProduct();
    }



    render() {
        var errorText = 'Поле не может быть пустым!';
        //console.log(this.props.name)
        return (



            //
            <div className='BlockProductCard'>
                { (this.props.workMode == 1) &&
                    <div>
                        <li>
                            <input type="text"

                                defaultValue={this.props.name}
                                onChange={this.editProductName}//

                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="text"
                                defaultValue={this.props.url}
                                onChange={this.editProductUrl}
                            />
                            {
                                (this.props.ErrorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="number"
                                defaultValue={this.props.price}
                                onChange={this.editProductPrice}
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="number"
                                defaultValue={this.props.amount}
                                onChange={this.editProductAmount}
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <button className="" onClick={this.saveCardProduct}>Сохранить</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Отмена</button>
                        </li>
                    </div>
                }
                {(this.props.workMode == 2) &&
                    <div>
                        <li>
                            <input type="text"
                                placeholder='Название продукта'
                                //defaultValue={this.editProductName}
                                onChange={this.editProductName}//
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="text"
                                placeholder='url'
                                //defaultValue={this.editProductUrl}
                                onChange={this.editProductUrl}
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="number"
                                placeholder='Стоимость продукта'
                                //defaultValue={this.editProductPrice}
                                onChange={this.editProductPrice}
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <input type="number"
                                placeholder='количество'
                                //defaultValue={this.editProductAmount}
                                onChange={this.editProductAmount}
                            />
                            {
                                (this.props.errorCondition) &&
                                <span className='error' >{errorText}</span>
                            }
                        </li>
                        <li>
                            <button className="" onClick={this.saveCardProduct}>Сохранить</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Отмена</button>
                        </li>

                    </div>
                }

            </div>

        )
    }
};

export default BlockProductCard;