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


        cbEditProductName: PropTypes.func.isRequired,
        cbEditProductUrl: PropTypes.func.isRequired,
        cbEditProductPrice: PropTypes.func.isRequired,
        cbEditProductAmount: PropTypes.func.isRequired,

        cbSaveCardProduct: PropTypes.func.isRequired,
        cbCloseCardProduct: PropTypes.func.isRequired,

        errorCondition: PropTypes.bool.isRequired,

    };


    editProductName = (EO) => {
        this.props.cbEditProductName(EO.target.value);
        console.log(EO.target.value)//получаем изменненое значение через событие onChange 
    }
    editProductUrl = (EO) => {
        this.props.cbEditProductUrl(EO.target.value);
    }
    editProductPrice = (EO) => {
        console.log(EO.target.value);
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



            //Разибто по условиям (this.props.workMode == 1,2,3)
            <div className='BlockProductCard'>
                {(this.props.workMode == 1) &&
                    <div>
                        <form>
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
                            <button className="" onClick={this.saveCardProduct} disabled = {this.props.errorCondition}>Сохранить</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Отмена</button>
                        </li>
                        </form>
                    </div>
                }
                {console.log(this.props.errorCondition)}
                {(this.props.workMode == 2) &&
                    <div>
                         <form>
                        <li>
                            <input type="text"
                                placeholder='Название продукта'
                                defaultValue={this.editProductName}
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
                            <button className="" onClick={this.saveCardProduct} disabled = {this.props.errorCondition}>Сохранить</button>
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
                                defaultValue={this.props.name}
                                disabled={this.props.name}

                            />
                        </li>

                        <li>
                            <input type="text"
                                defaultValue={this.props.url}
                                disabled={this.props.url}
                            />
                        </li>
                        <li>
                            <input type="number"
                                defaultValue={this.props.price}
                                disabled={this.props.price}

                            />
                        </li>
                        <li>
                            <input type="number"
                                defaultValue={this.props.amount}
                                disabled={this.props.amount}
                            />
                        </li>
                        <li>
                            <button className="" onClick={this.closeCardProduct}>Отмена</button>
                        </li>

                    </div>
                }
            </div>

        )
    }
};

export default BlockProductCard;