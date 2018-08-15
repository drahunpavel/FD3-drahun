import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './Add.css';

class Add extends React.Component {

    state = {
        myValue: "",
        btnIsDisabled: true,
        authorIsEmpty: true,
        textIsEmpty: true,
    }

    onAuthorChange = (e) => {
        if (e.target.value.trim().length > 0) {
            this.setState({ authorIsEmpty: false })
        } else {
            this.setState({ authorIsEmpty: true })
        }
    };

    onTextChange = (e) => {
        if (e.target.value.trim().length > 0) {
            this.setState({ textIsEmpty: false })
        } else {
            this.setState({ textIsEmpty: true })
        }
    };
    // каждый раз, после любого изменения у нас вызывается setState, а значит -
    // полная перерисовка компонента.наш выбор - это второй путь. Неконтролируемый компонент
    //     Главное отличие неконтролируемого компонента от контролируемого в том, что у него
    // нет обработчика изменений, а значит нет постоянных вызовов setState и перерисовок
    // Для того чтобы считать значение такого компонента используется вспомогательная
    // функция вспомогательной библиотеки ReactDOM - ReactDOM.findDOMNode, а для
    // того, чтобы можно было найти с помощью нее элемент, используется атрибут ref.

    // onChangeHandler=(EO)=>{
    //     this.setState({
    //         myValue:EO.target.value,
    //     })
    // }
    componentDidMount = () => {
        ReactDOM.findDOMNode(this.refs.author).focus();
    };



    // Отключим кнопку "показать alert", если не отмечен чекбокс
    // onCheckRuleClick: function(e) {
    //     ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked;
    //     },
    //     ...
    //     <label className='add__checkrule'>
    //     <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheck
    //     RuleClick}/>Я согласен с правилами
    //     </label>
    //     <button
    // className='add__btn'
    // onClick={this.onBtnClickHandler}
    // ref='alert_button'
    // disabled>
    // Показать alert
    // </button>
    onCheckRuleClick = (EO) => {
        this.setState({
            btnIsDisabled: !this.state.btnIsDisabled,
        }); //устанавливаем значение в state

    };


    onBtnClickHandler = (EO) => {
        EO.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        console.log(author + '\n' + text);
        //console.log(this.refs);
        //alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }
    render() {
        return (
            <form className='add cf'>
                <input
                    type='text'
                    onChange={this.onAuthorChange}
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onTextChange}
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                ></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.onCheckRuleClick} ref='checkrule' />Я согласен с
                    правилами
</label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={this.state.btnIsDisabled || this.state.authorIsEmpty || this.state.textIsEmpty}>{/*//если хотя бы одно                     из свойств состояния (agreeNotChecked, authorIsEmpty, textIsEmpty) имеет значение                     true - кнопка выключается.*/}
                    Показать alert
</button>
            </form>
        );
    };
};

export default Add;