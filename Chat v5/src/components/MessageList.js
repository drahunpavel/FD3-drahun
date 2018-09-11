import React, { Component } from 'react'
import "./MessageList.css"
import autoscroll from 'autoscroll-react'


const time = string => {
  const date = new Date(string)
  const minutes = date.getMinutes()
  return `${date.getHours()}:${minutes < 10 ? '0' + minutes : minutes}`
}

class MessagesList extends Component {
  render() {
    return (
      <div className="MessagesList-container">
        <section id="MessageList">
          <ul id="message-list">
            {this.props.messages.map((message, index) => (
              <li key={index} id="message">
                <div id="message-author">{message.senderId}&nbsp;{time(message.createdAt)}</div>
                <div id="message-text">{message.text}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}

//export default MessagesList
export default autoscroll(MessagesList)