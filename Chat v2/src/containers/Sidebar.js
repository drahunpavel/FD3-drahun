import { connect } from 'react-redux'
import Sidebar from './src/components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(Sidebar)