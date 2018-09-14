import React from 'react';
import ReactDOM from 'react-dom';


import News from './src/components/News';
import Add from './src/components/Add';

let startArr = require('./src/catalog.json');



var EventEmitter = require('events').EventEmitter;
window.ee = new EventEmitter();//благодаря window.ee мы можем подписываться/отписываться


class App extends React.Component {
  state = {
    startArray: startArr,
    alongArray: "",
  }


  componentDidMount = () => {
    var self = this;
    
    window.ee.addListener('News.add', function (item) {
      console.log(item)
      var nextNews = item.concat(self.state.startArray);

      self.setState({ 
        startArray: nextNews 
      });
      //console.log(this.state.startArray)
    });
  };
  componentWillUnmount = () => {
    window.ee.removeListener('News.add');
  };

  render() {
    console.log(this.state.startArray)
    return (
      <div>
        <h3>Блог</h3>
        <Add
        startArray={this.state.startArray}
        />
        <News
          startArray={this.state.startArray}
        />
      </div>
    )
  }

};



ReactDOM.render(
  <App />
  ,


  document.getElementById('root')
);
export default App;