import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author }) => (
  <div >

    <div id="">{author}</div>
    <div id="">{message}</div>

  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message