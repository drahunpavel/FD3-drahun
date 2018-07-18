import React from 'react';
import PropTypes from 'prop-types';


import './BlockIshop.css';

import BlockProductsList from './BlockProductsList';
import BlockProductCard from './BlockProductCard';


class BlockIshop extends React.Component {

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
    workMode: 0, //рабочий режим 1 - редактирование, 2-добавление нового товара, 3-отображение карточки выбранного товара

    isSelected: "", //выбранное поле
    curentCard: '', //карта выбранного продукта


    productsArray: this.props.productsArray, //рабочий массив

    //Редактирование
    //editCard:'', //карта(хэш) редактируемого продукта

    errorCondition: false, //состояние ошибки при валидации полей

    selectedCode: '',
    selectedName: '', //selected... хранят данные оформления продукта
    selectedUrl: '',
    selectedPrice: '',
    selectedAmount: '',

  };

  //Функция выбора продукта
  isSelectFunc = (fieldNumber, propsnum, propsname, propsurl, propsprice, propsamount) => {
    this.setState({
      isSelected: fieldNumber,
      selectedCode: propsnum,
      selectedName: propsname,
      selectedUrl: propsurl,
      selectedPrice: propsprice,
      selectedAmount: propsamount,
      workMode: 3,
    })
  };

  //удаление продукта из массива
  //Перебор массива forEach((v, i); Проверка на совпадение deleteCode == v.code; Вырезание выбранного элемента  splice(i, 1)
  //Обновление состояние this.setState
  deleteProduct = (deleteCode, deleteName) => {
    if (confirm("Удалить " + deleteName + ' из списка?')) {
      console.log("Button deleteProduct");
      //console.log("Удаление строки №" + deleteCode);
      this.state.productsArray.forEach((v, i) => {
        if (deleteCode == v.code)
          this.state.productsArray.splice(i, 1);
      });
    };
    this.setState({
      productsArray: this.state.productsArray,
    })
  }

  //Редактирование продукта
  //Получает переданные параметры продукта и сохраняет их
  editProduct = (propsnum, propsname, propsurl, propsprice, propsamount) => {
    console.log("Button editProduct");
    // console.log(edithash);
    this.setState({
      selectedCode: propsnum,
      selectedName: propsname,
      selectedUrl: propsurl,
      selectedPrice: propsprice,
      selectedAmount: propsamount,
      workMode: 1,
    })

  };

  /////////////////////////////////////////////////////Валидация полей карточки продукта
  //Валидация простенькая и хреновенькая
  editProductName = (newName) => {
    //console.log(newName)
    if ((!newName)) {
      console.log("Пусое имя!")
      this.setState({
        errorCondition: true,
      })
    } else {
      //console.log(newName)
      this.setState({
        selectedName: newName,
        errorCondition: false,
      })
    }
  }

  editProductPrice = (newPrice) => {
    if ((newPrice!=null)) {
      console.log("Пусое newPrice!")
      this.setState({
        errorCondition: true,
      })
    } else {
      //console.log(newPrice)
      this.setState({
        selectedPrice: newPrice,
        errorCondition: false,
      })
    }
  }
  editProductUrl = (newUrl) => {
    if ((!newUrl)) {
      console.log("Пусое newUrl!")
      this.setState({
        errorCondition: true,
      })
    } else {
      //console.log(newUrl)
      this.setState({
        selectedUrl: newUrl,
        errorCondition: false,
        
      })
    }
  }
  editProductAmount = (newAmount) => {
    if ((!newAmount)) {
      console.log("Пусое имя!")
      this.setState({
        errorCondition: true,
      })
    } else {
      //console.log(newAmount)
      this.setState({
        selectedAmount: newAmount,
        errorCondition: false,
      })
    }
  }
  //////////////////////////////////////////////////////////////////////////


  //функция добавления нового продукта
  //присваивает рабочий режим
  addNewProduct = () => {
    //console.log(this.state.productsArray.length)
    console.log("Button addNewProduct");
    this.setState({
      workMode: 2,
    })
  }

  //Функция сохранение на событие onClick={this.saveCardProduct}
  //если новый элемент, добавляет через push, старый элемент редактирует, после чего обновляет массив с продуктами и закрывает окно
  saveCardProduct = () => {
    (this.state.workMode == 2) ?
      this.state.productsArray.push({//набранные значения через EO.target.value и пушим в массив
        code: this.state.productsArray.length + 1,
        name: this.state.selectedName,
        url: this.state.selectedUrl,
        price: this.state.selectedPrice,
        amount: this.state.selectedAmount,
      }) :
      this.state.productsArray.forEach((v) => {
        if (this.state.selectedCode == v.code) {
          v.name = this.state.selectedName;
          v.url = this.state.selectedUrl;
          v.price = this.state.selectedPrice;
          v.amount = this.state.selectedAmount;
        }
      });
    this.setState({
      productsArray: this.state.productsArray,
      workMode: 0,
    })
  }
//Функция отмены на событие onClick={this.closeCardProduct}
  closeCardProduct = () => {
    console.log("Button closeCardProduct");
    this.setState({
      //stateСonservation:false,
      workMode: 0,
      errorCondition: false,
    })
  }


  render() {
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

                workMode={this.state.workMode}

                cbDeleteProduct={this.deleteProduct}

                cbEditProduct={this.editProduct}

                cbIsSelectFunc={this.isSelectFunc}

                cbIsSelected={this.state.isSelected == v.code ? true : false}

              />
            )}
          </tbody>
        </table>
        <button className="newButton" onClick={this.addNewProduct}>Новый товар</button>

        <BlockProductCard
          num={parseFloat(this.state.selectedCode)}
          name={this.state.selectedName}
          price={parseFloat(this.state.selectedPrice)}
          url={this.state.selectedUrl}
          amount={parseFloat(this.state.selectedAmount)}

          workMode={this.state.workMode}

          cbEditProductName={this.editProductName}
          cbEditProductUrl={this.editProductUrl}
          cbEditProductPrice={this.editProductPrice}
          cbEditProductAmount={this.editProductAmount}

          cbSaveCardProduct={this.saveCardProduct}
          cbCloseCardProduct={this.closeCardProduct}

          errorCondition={this.state.errorCondition}

        />
      </div>
    );
  };

};

export default BlockIshop;