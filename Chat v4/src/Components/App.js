import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import "./App.css";
import Title from "./Title";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";

class App extends React.Component {

    static propTypes = {
        blank_data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                senderId: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
            })
        )
    };

    state={
        blankData:this.props.blank_data,
    }
  
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.blankData} />
        <SendMessageForm />
     </div>
    )
  }
}

export default App;