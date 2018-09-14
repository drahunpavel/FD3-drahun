import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import WhosOnlineList from './WhosOnlineList'

import "./ChatsScreen.css"

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
    }
    this.sendMessage = this.sendMessage.bind(this)

  }

  sendMessage(text) {
    console.log(text)
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    })
    console.log(this.state.currentRoom.id)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:5e1af052-19c4-424c-ba3f-69494c8caa62',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })
    console.log(this.props.currentUsername)
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: 15838607,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate(),
          },
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div className="container">
        <div className="chatContainer">
          <aside className="whosOnlineListContainer">
            <WhosOnlineList
              currentUser={this.state.currentUser}
              users={this.state.currentRoom.users}
            />
          </aside>
          <section className="chatListContainer">
            <MessageList
              messages={this.state.messages}
              
            />
            <SendMessageForm
              onSubmit={this.sendMessage}
            />
          </section>
        </div>
      </div>
    )
  }
}

export default ChatScreen