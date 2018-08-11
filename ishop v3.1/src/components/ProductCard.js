import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {

    static propTypes = {
        // cardProductId:PropTypes.shape({
        //                 code: PropTypes.number,
        //                 name: PropTypes.string.isRequired,
        //                 url: PropTypes.string.isRequired,
        //                 price: PropTypes.number.isRequired,
        //                 amount: PropTypes.number.isRequired,
        //             }),


        workMode: PropTypes.number,
        //selectedProductId: PropTypes.number,
    }

    state = {
        cbselectedProductId:this.props.selectedProductId,
        cbcardProductId:this.props.cardProductId,
        errorCondition: "false",




        selectedCode: '',
        selectedName:"", //selected... хранят данные оформления продукта
        selectedUrl: '',
        selectedPrice: '',
        selectedAmount: '',


        errorConditionName: true,
        errorConditionUrl: true,
        errorConditionPrice: true,
        errorConditionAmount: true,
    }


    
    saveCardProduct = () => {
        //EO.stopPropagation();
        this.props.cbSaveCardProduct(this.state.selectedName, this.state.selectedUrl, this.state.selectedPrice, this.state.selectedAmount);
        this.setState({

            errorConditionName: true,
            errorConditionUrl: true,
            errorConditionPrice: true,
            errorConditionAmount: true,
        })
    }

    closeCardProduct = (EO) => {
        
        EO.stopPropagation();
        this.props.cbCloseCardProduct();

        this.setState({
            errorConditionName: true,
            errorConditionUrl: true,
            errorConditionPrice: true,
            errorConditionAmount: true,
        })
    }





    editProductName = (EO) => {
        //this.props.cardProductId[0].name
        console.log(console.log(this.props.cardProductId))
        console.log(EO.target.value)
        if (EO.target.value != "") {

            this.setState({
                selectedName: EO.target.value,
                errorConditionName: false,
            })
        } else {
            this.setState({
                errorConditionName: true,
            })
        }
    }
    editProductUrl = (EO) => {
        //console.log(EO.target.value)
        let reg = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        if (reg.test(EO.target.value)) {
            //console.log("Ошибки нет")
            this.setState({
                selectedUrl: EO.target.value,
                errorConditionUrl: false,
            })
        } else {
            this.setState({
                errorConditionUrl: true,
            })
        }
    }
    editProductPrice = (EO) => {
        //console.log(EO.target.value)
        if (EO.target.value > 0 && EO.target.value != "") {
            //console.log("Ошибки нет")
            this.setState({
                selectedPrice: EO.target.value,
                errorConditionPrice: false,
            })
        } else {
            this.setState({
                errorConditionPrice: true,
            })
        }
    }
    editProductAmount = (EO) => {
        //console.log(EO.target.value)//id редактируемого товара
        if (EO.target.value >= 0 && EO.target.value != "") {
            //console.log("Ошибки нет")
            this.setState({
                selectedAmount: EO.target.value,
                errorConditionAmount: false,
            })
        } else {
            this.setState({
                errorConditionAmount: true,
            })
        }
    }



    render() {
        //console.log(this.props.cardProductId)
        let errorText = "Error"
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

                        <li>
                            <input type="text"
                                onChange={this.editProductName}
                                
                                defaultValue={this.props.cardProductId[0].name}
                                
                            />
                            
                            {console.log(this.props.cardProductId[0].name)}
                            {this.state.errorConditionName ? <span className='error' >{errorText}</span> : null}
                        </li>
                        <li>
                            <input type="text"
                                onChange={this.editProductUrl}
                                defaultValue={this.props.cardProductId[0].url}
                                placeholder='https://mail.ru/'
                            />
                            {this.state.errorConditionUrl ? <span className='error' >{errorText}</span> : null}
                        </li>
                        <li>
                            <input type="number"
                                onChange={this.editProductPrice}
                                defaultValue={this.props.cardProductId[0].price}
                            />
                            {this.state.errorConditionPrice ? <span className='error' >{errorText}</span> : null}
                        </li>
                        <li>
                            <input type="number"
                                onChange={this.editProductAmount}
                                defaultValue={this.props.cardProductId[0].amount}
                            />
                            {this.state.errorConditionAmount ? <span className='error' >{errorText}</span> : null}
                        </li>
                        <li>
                            <button className="" onClick={this.saveCardProduct} disabled={this.state.errorConditionName || this.state.errorConditionUrl || this.state.errorConditionPrice || this.state.errorConditionAmount}>Save</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Cancel</button>
                        </li>

                    </div>
                }
                {(this.props.workMode == 3) &&
                    <div>

                        <li>
                            <input type="text"
                                onChange={this.editProductName}

                            />
                            {this.state.errorConditionName ? <span className='error' >{errorText}</span> : null
                            }
                        </li>

                        <li>
                            <input type="text"
                                placeholder='https://mail.ru/'
                                onChange={this.editProductUrl}
                            />
                            {this.state.errorConditionUrl ? <span className='error' >{errorText}</span> : null
                            }
                        </li>
                        <li>
                            <input type="number"
                                onChange={this.editProductPrice}
                            />
                            {this.state.errorConditionPrice ? <span className='error' >{errorText}</span> : null
                            }
                        </li>
                        <li>
                            <input type="number"
                                onChange={this.editProductAmount}
                            />
                            {this.state.errorConditionAmount ? <span className='error' >{errorText}</span> : null
                            }
                        </li>
                        <li>
                            <button className="" onClick={this.saveCardProduct} disabled={this.state.errorConditionName || this.state.errorConditionUrl || this.state.errorConditionPrice || this.state.errorConditionAmount}>Save</button>
                            &nbsp;
                            <button className="" onClick={this.closeCardProduct}>Cancel</button>
                        </li>

                    </div>
                }
            </div>
        )

    }

}

export default ProductCard;