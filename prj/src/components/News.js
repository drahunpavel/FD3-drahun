import React from "react";
import PropTypes from "prop-types";

//import './ProductsGrid.css';
import Comments from "./Comments";
import Article from "./Article";
//import "./News.css";
import "./style.css";

class News extends React.Component {
  //props только для чтения/ props -  это валидация входящих данных
  static propTypes = {
    startArray: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        small_text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      })
    )
  };
  // setState() - не изменяет this.state немедленно, а создает очередь изменений
  // состояния. Доступ к this.state после вызова метода, потенциально может вернуть
  // имеющееся (что равносильно - бывшее) значение.
  state = {
    //state Для динамисеских свойств
    //arrNews: this.props.startArray,//рабочий массив
    counter: 0,
    openArticleId: null
  };

  onTotalNewClick = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };
  handleClick = openArticleId =>
    this.setState({
      openArticleId:
        this.state.openArticleId === openArticleId ? null : openArticleId
    });

  render() {
    //console.log(this.props.startArray)
    const articleElements = this.props.startArray.map((item, index) => (
      console.log(item),
      //onClick={this.handleClick.bind(this,item.id)} был метод, выделяющий целый тег li, теперь колбэком передаем ее в дочерний элемент
      // TODO:  <li key={item.id} onClick={this.handleClick.bind(this,item.id)}>

      <div key={item.code}  className="single-post" >

        {console.log("item.code " + item.code)}
        {/* <Article data={item} defaultOpen={index === 0} /> */}
        {/* //TODO: callback */}
        {console.log("ID выбранной (открытой) статьи " + this.state.openArticleId)}
        <Article
          data={item}
          isOpen={this.state.openArticleId === item.code}

          onButtonClick={this.handleClick.bind(this, item.code)}
        />

      </div>
    ));
    return (

      <div className="blog-posts">
        {/* проверка новостей на их кол-во */}
        {/* {this.props.startArray.length > 0 ? 
                    this.props.startArray.map((item, index) =>

                        <div key={index} >
                            <Article 

                                data={item} defaultOpen={index===0}
                            />
                        </div>
                    ) : <p>Статей нет</p>
                } */}
        {/* {class+class} */}

        {this.props.startArray.length > 0 ? (
          <div>{articleElements}</div>
        ) : <div><p>Статей нет</p></div>
        }

        <strong
          className={
            "new_count" + (this.props.startArray.length > 0 ? "" : "none")
          }
          onClick={this.onTotalNewClick}
        >
          Всего статей: {this.props.startArray.length}
        </strong>
      </div>
    );
  }
}

export default News;
