import React from "react"
import PropTypes from "prop-types"

const Sidebar = ({ users }) => (
  <aside id="sidebar">

    <ul>
      {users.map(user => (
        
        <li id="users-list" key={user.id}>{user.name}</li>
        
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export default Sidebar
