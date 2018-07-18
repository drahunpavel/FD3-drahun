import React from 'react';
import PropTypes from 'prop-types';

import './ProductsGrid.css';
import ProductCard from './ProductCard';

class ProductsGrid extends React.Component {

    static propTypes = {
        startProducts: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                amount: PropTypes.number.isRequired,
            })
        )

    };

    state = {
        selectedProductId: 0,//ИД выбранного товара

        products: this.props.startProducts,//рабочий массив

        workMode:this.props.startCardWorkMode,
        workMode:0, //0-отсутствие карточки товара, 1-отображение выбранного товара, 2-редактирование товара, 3-добавление нового товара
    
        cardProductId:null, //данные выбранной карточки по id
    };

    isSelected = (EO) => {
        //console.log(this.state.products)
        let selectedProduct = this.state.products.filter((v, i) => {
            if(v.code == EO.currentTarget.getAttribute("data-product-id"))
            return v;
        });
        console.log('Выбран товар с ID: ' + EO.currentTarget.getAttribute("data-product-id"));
        //console.log(selectedProduct)
        this.setState({
            selectedProductId: EO.currentTarget.getAttribute("data-product-id"),
            cardProductId:selectedProduct,
            workMode: 1,
        });
    };

    deleteProduct = (EO) => {
        if (confirm("Удалить " + ' из списка?')) {
            //EO.stopPropagation();
            this.state.products.forEach((arr, i) => {
                if(arr.code == EO.currentTarget.getAttribute("data-product-id")) {
                    this.state.products.splice(i,1);
                    console.log(this.state.products.splice(i,1))
                }
            });
        }
        console.log("Удаляем товар с ID: " + EO.currentTarget.getAttribute("data-product-id"));
        this.setState({
            workMode: 0,
            //products: this.state.products,
            cardProductId: null,
            
        });
    }

    editProduct = (EO) => {
        //EO.stopPropagation();
        //console.log(EO.currentTarget.getAttribute("data-product-id"))
        this.state.products.forEach((arr, i) => {
            arr.code == EO.currentTarget.getAttribute("data-product-id");
        });

        console.log("Редактируем товар с ID: " + EO.currentTarget.getAttribute("data-product-id"));
        this.setState({
            selectedProductId: EO.currentTarget.getAttribute("data-product-id"),
            workMode: 2,
        });
    }

    render() {
        return (
            <div>
                <table>
                    {/* {this.props.shopTitle} */}
                    <tbody>
                        {this.state.products.map(arr =>
                            <tr key={arr.code} data-product-id={arr.code} className={this.state.selectedProductId == arr.code ? "selected" : null} onClick={this.isSelected}>
                                <td>{arr.name}</td>
                                <td><a href={arr.url}>link</a></td>
                                <td>{arr.price}</td>
                                <td>{arr.amount}</td>
                                <td>
                                    <button onClick={this.editProduct} data-product-id={arr.code}>Редактировать</button>
                                    &nbsp;
                                    <button onClick={this.deleteProduct} data-product-id={arr.code}>Удалить</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                <button>Добавить новый товар</button>
                
                <ProductCard
                    workMode={this.state.workMode}
                    selectedProductId = {parseFloat(this.state.selectedProductId)}
                    cardProductId={this.state.cardProductId}     
                    products={this.state.products}                                   
                />
            </div>
        )
    }

};

export default ProductsGrid;