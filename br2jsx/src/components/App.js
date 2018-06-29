import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {


    static propTypes = {
        children: PropTypes.string.isRequired,
    };



    newFunc(text) {
        let newArr = [];
        let arr = text.split("<br>");
        arr.forEach((v, i) => {
            if (i > 0) {
                newArr.push(<br key={i} />);//перед каждым элементов массива становится разрыв строки
                newArr.push(v);
                //console.log(newArr);
            }
            else newArr.push(v); // необязательно
        });
        return newArr;
    };


    render() {
        console.log(this.props.children);
        console.log(this.props.children.split('<br>')); //split - ревратить строку в массив, разбив ее по разделителю <br>
        console.log(this.newFunc(this.props.children));
        
        return (
            <div>
                <p>
                    {this.newFunc(this.props.children)}
                </p>
            </div>
        )
    }
}

export default App;