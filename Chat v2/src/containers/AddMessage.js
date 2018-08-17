import { connect } from 'react-redux'
import AddMessage from './src/components/AddMessage'
import { addMessage } from './src/actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessage)