import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
import "./UsernameForm.css"

class UsernameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      authorIsEmpty: true
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {

    this.setState({
      username: e.target.value,
      authorIsEmpty: false
    })
  }

  render() {
    let authorIsEmpty = this.state.authorIsEmpty;
    return (
      <div className="loginform">

        <h2>Enter your login or new login</h2>
        <form onSubmit={this.onSubmit}>
          <input
            className="user-login"
            type="text"
            placeholder="Your login"
            onChange={this.onChange}
            ref='text'
          />
          <button
            className="add__btn"

            disabled={authorIsEmpty}
          >
            Send
          </button>
        </form>

      </div>
    )
  }
}

export default UsernameForm