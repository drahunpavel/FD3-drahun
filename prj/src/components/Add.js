import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//import './Add.css';
import "./style.css";


class Add extends React.Component {
    state = {
        agreeNotChecked: true,
        authorIsEmpty: true,
        textIsEmpty: true,
        text2IsEmpty: true
    };
    componentDidMount = () => {
        ReactDOM.findDOMNode(this.refs.author).focus();
    };
    onBtnClickHandler = e => {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var textEl2 = ReactDOM.findDOMNode(this.refs.text2);
        var text = textEl.value;
        var text2 = textEl2.value;
        //var text = ReactDOM.findDOMNode(this.refs.text).value;
        //console.log(author + '\n' + text);
        var arrayLength=this.props.startArray.length+1;
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log("длинна нового массива "+arrayLength)
        var item = [
            {
                code:arrayLength,
                small_text: text,
                text: text2,
                author: author
            }
        ];
        //console.log(item)
        window.ee.emit("News.add", item); //сгенерируй событие 'News.add' и передай в  качестве данных - item.

        textEl.value = ""; //удалять текст новости, но оставлять "чекбокс" и автора.
        textEl2.value = "";
        this.setState({
            textIsEmpty: true,
            text2IsEmpty: true
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
    onCheckRuleClick = e => {
        this.setState({ agreeNotChecked: !this.state.agreeNotChecked });
    };
    onFieldChange = (fieldName, e) => {
        if (e.target.value.trim().length > 0) {
            this.setState({ ["" + fieldName]: false });
        } else {
            this.setState({ ["" + fieldName]: true });
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
            textIsEmpty = this.state.textIsEmpty,
            text2IsEmpty = this.state.text2IsEmpty;
        return (
            <div className="blog-posts">
                <div className="leave-comment-area">
                    <h4 className="title">
                        <b className="light-color">Оставьте свое мнение</b>
                    </h4>
                    <div className="leave-comment">
                        <form className="post">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        className="name-input"
                                        onChange={this.onFieldChange.bind(this, "authorIsEmpty")}
                                        placeholder="Ваше имя"
                                        ref="author"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <textarea
                                        rows="2"
                                        className="message-input"
                                        onChange={this.onFieldChange.bind(this, "textIsEmpty")}
                                        placeholder="Заголовок новости"
                                        ref="text"
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <textarea
                                        rows="6"
                                        className="message-input"
                                        onChange={this.onFieldChange.bind(this, "text2IsEmpty")}
                                        placeholder="текст статья"
                                        ref="text2"
                                    />
                                </div>
                                <div>
                                    Подтвердите правильность введенных данных
                                <div className="blog-posts2">
                                    
                                    <label className="blog-posts2">
                                        <input className="blog-posts2"
                                        id="sclaes"
                                        value="scales"
                                        type="checkbox"
                                        ref="checkrule"
                                        onChange={this.onCheckRuleClick}
                                    /></label>
                                </div>
                                </div>





                                <div className="col-sm-12">
                                    <button
                                        className="btn btn-2"
                                        onClick={this.onBtnClickHandler}
                                        ref="alert_button"
                                        disabled={
                                            agreeNotChecked ||
                                            authorIsEmpty ||
                                            textIsEmpty ||
                                            text2IsEmpty
                                        }
                                    >
                                        Добавить статью
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
