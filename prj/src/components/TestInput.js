import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TestInput extends React.Component {

    state = {
        myValue: "",
    }
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
    onBtnClickHandler = () => {
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }
    render() {
        return (
            <div>
                <input
                    className='test-input'
                    defaultValue=''
                    placeholder='введите значение'
                    ref='myTestInput'

                >
                    {/* {console.log(this.refs.myTestInput)} */}
                </input>
                <button onClick={this.onBtnClickHandler} ref='alert_button'>Показать alert</button>
            </div>
        );
    };
};

export default TestInput;