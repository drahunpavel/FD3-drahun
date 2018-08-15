import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';


class Article extends React.Component {

    state = {//getInitalState - начальное состояние компонента
        visible: false,
    }
    //Так же у setState есть возможность указать callback функцию, которая будет вызвана
    //после того, как новое состояние "установится".
    state = {
        news_author: this.props.data.author,
        news_text: this.props.data.text,
        small_text: this.props.data.small_text,
        visible: false,
    }

    redmoreClick = (EO) => {
        EO.preventDefault();
        this.setState({
            visible: true,
        })
    }

    render() {
        let visible = this.state.visible; //считыванеие значения перемнной из состояния еомпонента
        //console.log("render", this);
        console.log(this.state.news_author+"\n" +this.state.small_text+ "\n"+this.state.news_text)
        return (
            <div className="article">
                <p className="news_author">{this.props.data.author}</p>
                <p className="small_text">{this.props.data.small_text}</p>
                {/* {console.log(this.state.visible)} */}
                <a href="#" onClick={this.redmoreClick} className={"news_readmore " + (visible ? "none" : "")}>Подробнее</a>{/*для news_readmore - не показывать, если visible === true*/}
                <p className={"news_text " + (visible ? "" : "none")}>{this.props.data.text}</p>{/*для news_text - не показывать, если visible = false !!!!! ВАЖНО! "news_text " - должен быть пробел после класса, чтобы применялись остальные свойсвтваЙ*/}
            </div>
        );
    }
}

export default Article;