import React from 'react';
import PropTypes from 'prop-types';

//import './Article.css';
import "./style.css";

const time = string => {
    const date = new Date(string)
    const minutes = date.getMinutes()
    return `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`
  }

class Article extends React.Component {


    //Так же у setState есть возможность указать callback функцию, которая будет вызвана
    //после того, как новое состояние "установится".
    state = {
        news_author: this.props.data.author,
        news_text: this.props.data.text,
        small_text: this.props.data.small_text,
        visible: false,
        //isOpen: false,
        //isOpen: this.props.defaultOpen,
    }

    redmoreClick = (EO) => {
        EO.preventDefault();
        this.setState({
            visible: true,
        })
    }

    render() {
        console.log(this.props.isOpen)
        let visible = this.state.visible; //считыванеие значения перемнной из состояния еомпонента
        //console.log("render", this);
        //console.log(this.state.news_author + "\n" + this.state.small_text + "\n" + this.state.news_text)
        const body = this.props.isOpen && <p className={"news_text"}>{this.props.data.text}</p>
        {/* <a href="#" onClick={this.redmoreClick} className={"news_readmore " + (visible ? "none" : "")}>Подробнее</a> */ }
        {/* <p className={"news_text " + (visible ? "" : "none")}>{this.props.data.text}</p> */ }



          
        return (
            <div className="single-post">

                <hr />
                <h4 className="title"><b className="light-color">{this.props.data.small_text}</b>
                    <button className="read-more-btn" onClick={this.props.onButtonClick}>
                        {this.props.isOpen ? "Убрать" : "Показать"}
                    </button>
                </h4>
                <p className="date"><em>{this.props.data.author}</em></p>
                <p>{body}</p>
                <p className="date"><em>{(new Date).toString()}</em></p>







                {/* <p className="news_author">{this.props.data.author}
                    <p className="small_text">{this.props.data.small_text}</p>
                    <button onClick={this.props.onButtonClick}>
                        {this.props.isOpen ? "Убрать" : "Показать"}
                    </button>
                </p>
                <p class="date"><em>{(new Date).toString()}</em></p>
                {body} */}







                {/* <p className="small_text">{this.props.data.small_text}</p> */}
                {/* {console.log(this.state.visible)} */}

                {/* <a href="#" onClick={this.redmoreClick} className={"news_readmore " + (visible ? "none" : "")}>Подробнее</a> */}
                {/*для news_readmore - не показывать, если visible === true*/}
                {/* <p className={"news_text " + (visible ? "" : "none")}>{this.props.data.text}</p> */}
                {/*для news_text - не показывать, если visible = false !!!!! ВАЖНО! "news_text " - должен быть пробел после класса, чтобы применялись остальные свойсвтваЙ*/}

            </div>
        );
    }
}

export default Article;