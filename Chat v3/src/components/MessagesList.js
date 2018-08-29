import React from "react"
import PropTypes from "prop-types"
import Message from "./Message"



const MessagesList = ({ messages }) => (


  <section id="MessageList">

    <ul id="message-list">

      {messages.map(message => (
        <li id="message">
          <Message
            key={message.id}
            {...message}
          />
        </li>
      ))}

    </ul>
  </section>
)



MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};



export default MessagesList
