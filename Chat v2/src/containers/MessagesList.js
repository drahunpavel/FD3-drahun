import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(Sidebar)