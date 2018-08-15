import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './Add.css';

class Add extends React.Component {

    state = {
        agreeNotChecked: true,
        authorIsEmpty: true,
        textIsEmpty: true
    }
    componentDidMount=()=> {
        ReactDOM.findDOMNode(this.refs.author).focus();
      };
      onBtnClickHandler=(e)=> {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        console.log(author + '\n' + text);
      };
      onCheckRuleClick=(e)=> {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
      };
      onFieldChange=(fieldName, e)=> {
        if (e.target.value.trim().length > 0) {
          this.setState({[''+fieldName]:false})
        } else {
          this.setState({[''+fieldName]:true})
        }
      };

    // componentDidMount: function() {
    //     /* Слушай событие "Создана новость"
    //     если событие произошло, обнови this.state.news
    //     */
    //     },
    //     componentWillUnmount: function() {
    //     /* Больше не слушай событие "Создана новость" */
    //     },
    //     render:
    // Глобальная система событий
    // Напомню, у нас возник вопрос о необходимости взаимодействия двух компонентов.
    // Эти компоненты не состоят в отношении родитель-потомок.
    // Теперь мы можем в app.js добавить глобальную переменную:
    // ...
    // window.ee = new EventEmitter();
    // ...
    // Благодаря которой, можем генерировать событие в обработчике onBtnClickHandler
    // компонента <Add />
    // window.ee.emit('News.add', item); = сгенерируй событие 'News.add' и передай в
    // качестве данных - item.
    // И наконец, благодаря window.ee мы можем подписываться/отписываться в <App /> :

//     Хорошо
// было бы создать одну функцию, которая принимала бы аргумент - fieldName и
// изменяла бы соответствующую переменную в state согласно нашей логике.
    render() {
        var agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty;
        return (
            <form className='add cf'>
            <input
              type='text'
              className='add__author'
              onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
              placeholder='Ваше имя'
              ref='author'
            />
            <textarea
              className='add__text'
              onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
              placeholder='Текст новости'
              ref='text'
            ></textarea>
            <label className='add__checkrule'>
              <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
            </label>
    
            <button
              className='add__btn'
              onClick={this.onBtnClickHandler}
              ref='alert_button'
              disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
              >
              Показать alert
            </button>
          </form>
        );
    };
};

export default Add;