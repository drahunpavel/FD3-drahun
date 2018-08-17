import { connect } from 'react-redux'
import MessagesList from '../components/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesList)