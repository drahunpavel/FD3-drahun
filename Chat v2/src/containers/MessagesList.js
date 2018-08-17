import { connect } from 'react-redux'
import MessagesList from './src/components/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesList)