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
    workMode:0, //рабочий режим

    isSelected: '', //выбранное поле
    //curentCard: '', //карта выбранного продукта
    productsArray: this.props.productsArray, //рабочий массив

    //Редактирование
    editCard:'', //карта(хэш) редактируемого продукта

    errorCondition:false, //состояние ошибки при валидации полей

    selectedCode: '',
    selectedName: '', //selected... хранят данные оформления продукта
    selectedUrl: '',
    selectedPrice: '',
    selectedAmount: '',

    stateСonservation: false
  };

  // isSelectFunc = (number) => {//функция выбора поля num=code
  //   //console.log(number);
  //   this.setState({ isSelected: number });
  // };

  //удаление продукта из массива
  //Перебор массива forEach((v, i); Проверка на совпадение deleteCode == v.code; Вырезание выбранного элемента  splice(i, 1)
  //Обновление состояние this.setState
  deleteProduct = (deleteCode, deleteName) => {
    if (confirm("Удалить "+deleteName+' из списка?')) {
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
  editProduct=(propsnum, propsname, propsurl, propsprice, propsamount)=>{
    console.log("Button editProduct");
    // console.log(edithash);
    this.setState({
      selectedCode:propsnum,
      selectedName:propsname, 
      selectedUrl: propsurl,
      selectedPrice: propsprice,
      selectedAmount: propsamount,
      workMode:1,
    })
    
  };

//////////////////////////////////////////////////////////////////////////Валидация полей карточки продукта
  editProductName=(newName)=>{
    //console.log(newName)
    if (!newName) {
      console.log("Пусое имя!")
      this.setState({ 
        errorCondition: true 
      })
  } else {
    //console.log(newName)
      this.setState({ 
          selectedName: newName, 
          errorCondition: false 
      })
  }
}

editProductPrice=(newPrice)=>{
  if (!newPrice) {
    console.log("Пусое newPrice!")
    this.setState({ 
      errorCondition: true 
    })
} else {
  //console.log(newPrice)
    this.setState({ 
      selectedPrice: newPrice, 
      errorCondition: false 
    })
}
}
editProductUrl=(newUrl)=>{
  if (!newUrl) {
    console.log("Пусое newUrl!")
    this.setState({ 
        errorName: true 
    })
} else {
  //console.log(newUrl)
    this.setState({ 
      selectedUrl: newUrl, 
      errorCondition: false 
    })
}
}
  editProductAmount = (newAmount) => {
    if (!newAmount) {
      console.log("Пусое имя!")
      this.setState({ 
          errorName: true 
      })
    } else {
      //console.log(newAmount)
      this.setState({
        selectedAmount: newAmount,
        errorCondition: false 
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

//
  saveCardProduct = () => {

    (this.state.workMode==2)?
    this.state.productsArray.push({//вылавливаем набранные значения через EO.target.value и пушим в массив
      code: this.state.productsArray.length + 1,
      name: this.state.selectedName,
      url:this.state.selectedUrl,
      price:this.state.selectedPrice,
      amount:this.state.selectedAmount,
    }) :  
          this.state.productsArray.forEach((v) => {
            
          if (this.state.selectedCode == v.code){
            //console.log(selectedCode.num +"=="+ v.code)
                    v.name=this.state.selectedName;
                    v.url=this.state.selectedUrl;
                    v.price=this.state.selectedPrice;
                    v.amount=this.state.selectedAmount;
          }
        });


    this.setState({ 
      productsArray: this.state.productsArray,
      workMode: 0,
    })
  }

  // saveCardProduct=(saveFields)=>{
  //   console.log(saveFields)
  //   //console.log("Кнопка сохранить")
  //   this.state.productsArray.forEach((v, i) => {
  //     if (saveFields.num == v.code){
  //       console.log(this.state.selectedPrice)
  //       console.log(saveFields.num +"=="+ v.code)
  //               v.name=this.state.selectedName;
  //               v.url=this.state.selectedUrl;
  //               v.price=this.state.selectedPrice;
  //               v.amount=this.state.selectedAmount;
  //     }
  //   });
  //   this.setState({ 
  //     productsArray: this.state.productsArray,
  //   })
  // }

  closeCardProduct=()=>{
    console.log("Button closeCardProduct");
    this.setState({
      stateСonservation:false,
      workMode:0,
      errorCondition:false,
    })
  }


  // isCard = (hash) => {
  //   console.log(hash);
  //   this.setState({ curentCard: hash });
  // };



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
                cbIsSelected={this.state.isSelected == v.code ? true : false} //проверка на выбранное состояние по code//подсветка

                //cbSaveCardProduct={this.saveCardProduct}

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
        {/* {    console.log(this.state.selectedCode)}
        {    console.log(this.state.selectedName)}
        {    console.log(this.state.selectedPrice)}
        {    console.log(this.state.selectedUrl)}
        {    console.log(this.state.selectedAmount)} */}
          <BlockProductCard
            num={parseFloat(this.state.selectedCode) }
            name={this.state.selectedName }
            price={parseFloat(this.state.selectedPrice)  }
            url={ this.state.selectedUrl}
            amount={parseFloat(this.state.selectedAmount) }

            workMode={this.state.workMode}

            cbEditProductName = { this.editProductName }
            cbEditProductUrl = {this.editProductUrl}
            cbEditProductPrice={this.editProductPrice}
            cbEditProductAmount={this.editProductAmount}


            editCard={this.state.editCard} 

            cbSaveCardProduct={this.saveCardProduct}
            cbCloseCardProduct={this.closeCardProduct}

            errorCondition={this.state.errorCondition}
            /> 
    
      </div>
    );
  };

};

export default BlockIshop;