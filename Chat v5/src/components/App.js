import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatsScreen'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)

  }
  //проверяем статус ответа, проверяем успешность выполнения запроса, парсим json
  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen',
        })
      })
      .catch(error => console.error('error', error))
  }
  //TODO: в рендере прописать условие отображения
  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      console.log("login is entered: "+this.state.currentUsername)
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App