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
    componentDidMount = () => {
        ReactDOM.findDOMNode(this.refs.author).focus();
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var text = textEl.value;
        //var text = ReactDOM.findDOMNode(this.refs.text).value;
        //console.log(author + '\n' + text);

        var item = [{

            small_text: text,
            text: '...',
            author: author
        }];
        //console.log(item)
        window.ee.emit('News.add', item);//сгенерируй событие 'News.add' и передай в  качестве данных - item.
    
        textEl.value = '';//удалять текст новости, но оставлять "чекбокс" и автора.
        this.setState({
            textIsEmpty: true
        });
    };

    // componentDidMount = () => {
    //     var self = this;
    //     window.ee.addListener('News.add', function (item) {
    //         var nextNews = item.concat(self.state.news);
    //         self.setState({ news: nextNews });
    //     });
    // };
    // componentWillUnmount = () => {
    //     window.ee.removeListener('News.add');
    // };
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.ee.addListener - принимает в качестве аргументов имя события и функцию-
// обработчик. Чтобы внутри функции-обработчика (callback) использовать this - мы
// сохранили его чуть выше в переменную self.
//  var nextNews = item.concat(self.state.news) - 
// Мы создали новый массив, в котором первым элементом поставили новую новость,
// чтобы она была верхней в списке.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    onCheckRuleClick = (e) => {
        this.setState({ agreeNotChecked: !this.state.agreeNotChecked });
    };
    onFieldChange = (fieldName, e) => {
        if (e.target.value.trim().length > 0) {
            this.setState({ ['' + fieldName]: false })
        } else {
            this.setState({ ['' + fieldName]: true })
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

    //   
    // #принимает  аргумент - fieldName и
    // изменяет  соответствующую переменную в state согласно нашей логике.
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
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick} />Я согласен с правилами блога
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