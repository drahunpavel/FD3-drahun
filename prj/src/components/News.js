import React from 'react';
import PropTypes from 'prop-types';

//import './ProductsGrid.css';
import Comments from './Comments';
import Article from './Article';
import './News.css';


class News extends React.Component {


    //props только для чтения/ props -  это валидация входящих данных
    static propTypes = {
        startArray: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                small_text: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
            })
        )

    };
    // setState() - не изменяет this.state немедленно, а создает очередь изменений
    // состояния. Доступ к this.state после вызова метода, потенциально может вернуть
    // имеющееся (что равносильно - бывшее) значение.
    state = { //state Для динамисеских свойств
        //arrNews: this.props.startArray,//рабочий массив
        counter:0,
    };

    onTotalNewClick =()=>{
        this.setState({
            counter:++this.state.counter,
        })
        
    }

    render() {
        console.log(this.props.startArray)
        return (
            <div className="news">
                {this.props.startArray.length > 0 ? //проверка новостей на их кол-во
                    this.props.startArray.map((item, index) =>
                   
                        <div key={index} /*data-product-id={item.code}*/ >
                            <Article 
                                data={item} //передаем в article data=значение статьи по индексу
                            />
                        </div>
                    ) : <p>Статей нет</p>
                }
                {/* {class+class} */}
                <strong 
                    className={"new_count"+(this.props.startArray.length>0 ? "":"none")}
                    onClick={this.onTotalNewClick}>
                    Всего статей: {this.props.startArray.length}
                </strong>
            </div>
        );
    }
};



export default News;