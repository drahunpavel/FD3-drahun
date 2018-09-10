import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ChatManager, TokenProvider } from '@pusher/chatkit'

import "./App.css";
import Title from "./Title";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";



const instanceLocator = "v1:us1:5e1af052-19c4-424c-ba3f-69494c8caa62"
const testToken ="https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5e1af052-19c4-424c-ba3f-69494c8caa62/token"
const username = "Anna"
const roomId = 15838607


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
        messages: []
    }
  
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })
        
        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }


  render() {
    return (
      <div className="app">
        <Title />
        <MessageList
         //messages={this.state.blankData} 
         roomId={this.state.roomId}
         messages={this.state.messages}
         />
        <SendMessageForm />
     </div>
    )
  }
}

export default App;